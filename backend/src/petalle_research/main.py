from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .db.connect_db import engine
from sqlmodel import SQLModel
from os import getenv
from dotenv import load_dotenv
from .routers import clothes_routers

load_dotenv()

app = FastAPI()

CORS_ORIGIN = getenv("CORS_ORIGIN")

app.add_middleware(
    CORSMiddleware,
    allow_origins=([CORS_ORIGIN] if CORS_ORIGIN else []),
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_credentials=True,
    allow_headers=["Content-Type"],
)

app.include_router(clothes_routers.router)


@app.get("/")
def healthcheck():
    return {"Hello": "World"}


@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)
