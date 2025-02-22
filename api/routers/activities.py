from pydantic import BaseModel
from typing import List, Optional
from fastapi import APIRouter
from sqlalchemy.orm import joinedload
from api.models import Activity, UserProfile
from api.deps import db_dependency, user_dependency
from api.utils.strava.client import StravaAPI
from datetime import datetime, timedelta

router = APIRouter(
    prefix='/api/py/activities',
    tags=['activities']
)

class ActivityBase(BaseModel):
    name: str
    description: Optional[str] = None
    
class ActivityCreate(ActivityBase):
    runs: List[int] = []
    
@router.get("/")
def get_activities(db: db_dependency, user: user_dependency):
    """
    Get all AlpineSki activities for a user from strava if last_strava_sync is older than 1 day
    Otherwise, return the activities from the database
    """
    # Get the user's profile
    user_profile = db.query(UserProfile).filter(UserProfile.user_id == user.get('id')).first()
    if user_profile.last_strava_sync is None or user_profile.last_strava_sync < datetime.now() - timedelta(days=1):
        # Get the activities from strava
        strava_api = StravaAPI()
        activities = strava_api.get_ski_activities(user_profile.strava_access_token)
        # Create activities in the database if they don't exist otherwise update the existing ones
        for activity in activities:
            db_activity = db.query(Activity).filter(Activity.strava_id == activity.get('id')).first()
            db_activity = Activity(
                user_id=user.get('id'),
                name=activity.get('name', ''),
                description=activity.get('description', ''),
                date=activity.get('start_date', ''),
                duration=activity.get('elapsed_time', 0),
                distance=activity.get('distance', 0),
                average_speed=activity.get('average_speed', 0),
                max_speed=activity.get('max_speed', 0)
            )
            if db_activity:
                db.add(db_activity)
            else:
                db_activity.update(db_activity)
    return db.query(Activity).filter(Activity.user_id == user.get('id')).all()

@router.post("/")
def create_activity(db: db_dependency, user: user_dependency, activity: ActivityCreate):
    """
    """