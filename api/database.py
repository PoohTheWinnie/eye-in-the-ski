from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import NullPool
from dotenv import load_dotenv
import os

load_dotenv()

SQL_ALCHEMY_DATABASE_URL = os.getenv('DATABASE_URL')

"""
Using NullPool in SQLAlchemy (poolclass=NullPool) is important in scenarios where you do not want SQLAlchemy to maintain a connection pool. 
Instead, it creates and closes a new database connection for each request.
"""

engine = create_engine(SQL_ALCHEMY_DATABASE_URL, client_encoding='utf8', poolclass=NullPool)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()