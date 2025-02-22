from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationship
    profile = relationship("UserProfile", back_populates="user", uselist=False)

class UserProfile(Base):
    __tablename__ = 'user_profiles'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'), unique=True, nullable=False)
    name = Column(String(100))
    email = Column(String(255), unique=True)
    phone = Column(String(20))
    
    # Strava specific fields
    # strava_athlete_id = Column(String(50), unique=True)
    # strava_access_token = Column(String(255))
    # strava_refresh_token = Column(String(255))
    # strava_token_expires_at = Column(DateTime(timezone=True))
    last_strava_sync = Column(DateTime(timezone=True))
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationship
    user = relationship("User", back_populates="profile")

class Activity(Base):
    __tablename__ = 'activities'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    name = Column(String, index=True)
    description = Column(String, index=True)
    date = Column(DateTime, index=True)
    duration = Column(Integer, index=True)
    resort = Column(String, index=True)
    distance = Column(Float, index=True)
    average_speed = Column(Float, index=True)
    max_speed = Column(Float, index=True)

class Run(Base):
    __tablename__ = 'runs'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    name = Column(String, index=True)
    activity_id = Column(Integer, ForeignKey('activities.id'))
    distance = Column(Float, index=True)
    time = Column(Integer, index=True)
    elevation = Column(Integer, index=True)
    average_speed = Column(Float, index=True)
    max_speed = Column(Float, index=True)
