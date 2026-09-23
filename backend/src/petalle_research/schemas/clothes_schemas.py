from sqlmodel import SQLModel
from decimal import Decimal

class ClothesForms(SQLModel):
    name: str
    collection_name: str
    color: str
    size_num: int
    price: Decimal
