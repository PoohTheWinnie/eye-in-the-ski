import requests
import asyncio
from typing import Dict, List, Optional
from fastapi import HTTPException

class StravaAPI:
    def __init__(self, client_id: str, client_secret: str):
        self.client_id = client_id
        self.client_secret = client_secret
        self.base_url = "https://www.strava.com/api/v3"

    async def get_access_token(self, code: str) -> Dict:
        try:
            files = {
                'client_id': self.client_id,
                'client_secret': self.client_secret,
                'code': code,
                'grant_type': 'authorization_code'
            }
            response = requests.post(
                'https://www.strava.com/oauth/token',
                files=files  # This sends as multipart/form-data
            )
            response.raise_for_status()
            return response.json()['access_token']
        except requests.exceptions.RequestException as e:
            # Print the actual response for debugging
            if hasattr(e, 'response') and e.response is not None:
                print(f"Error response: {e.response.text}")
            raise HTTPException(status_code=400, detail=f"Strava API error: {str(e)}")

    async def get_ski_activities(self, access_token: str) -> List[Dict]:
        try:
            headers = {'Authorization': f'Bearer {access_token}'}
            # params = {'page': page}
            response = requests.get(
                f"{self.base_url}/athlete/activities", 
                headers=headers
            )
            response.raise_for_status()
            all_activities = response.json()
            return [activity for activity in all_activities if activity['sport_type'] == 'AlpineSki']
        except requests.exceptions.RequestException as e:
            raise HTTPException(status_code=400, detail=f"Strava API error: {str(e)}")

    async def get_activity_details(self, activity_id: int, access_token: str) -> Dict:
        try:
            headers = {'Authorization': f'Bearer {access_token}'}
            response = requests.get(
                f"{self.base_url}/activities/{activity_id}", 
                headers=headers
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            raise HTTPException(status_code=400, detail=f"Strava API error: {str(e)}") 
        

if __name__ == "__main__":
    # async def test():
    #     client = StravaAPI(client_id="149671", client_secret="a68ec7736a18025f40f0cd0cefaa433f58fb346a")
    #     # access_token = await client.get_access_token("6c1675eec245ba2984e7458bd8292d950307bc0c")
    #     # print(access_token)
    #     activities = await client.get_athlete_activities("20bf0dea22eae761a9a12ad677a5d6594ab02aa1")
    #     print(activities)
