from sqlmodel import SQLModel, Field
from typing import Optional
from decimal import Decimal
from petalle_research.utils.estimate_clothe_size import estimate_clothe_size

class Clothes(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    collection_id: int = Field(foreign_key="collection.id")
    color: str
    size_num: int
    @property
    def size_str(self) -> str:
        return estimate_clothe_size(self.size_num)
    price: Decimal = Field(max_digits=3, decimal_places=2)

