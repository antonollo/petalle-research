from sqlmodel import SQLModel, Relationship, Field
from typing import Optional

class Collection(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(unique=True)