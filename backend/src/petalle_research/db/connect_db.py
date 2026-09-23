from sqlmodel import create_engine, Session
from os import getenv
from dotenv import load_dotenv

load_dotenv()

DB_URL = getenv("DB_URL")
assert DB_URL is not None

engine = create_engine(DB_URL, echo=True)


def get_session():
    with Session(engine) as session:
        yield session
