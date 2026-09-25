from sqlmodel import Session, select
from petalle_research.models.clothes_models import Clothes
from petalle_research.models.collection_models import Collection
from petalle_research.schemas.clothes_schemas import ClothesForms


def get_all_clothes(session: Session) -> list[Clothes]:
    statement = select(Clothes)
    clothes_list = list(session.exec(statement).all())
    return clothes_list


def get_clothe_by_id(clothe_id: int, session: Session) -> Clothes | None:
    clothe = session.get(Clothes, clothe_id)
    return clothe


def register_clothe(data: ClothesForms, session: Session) -> Clothes:
    statement = select(Collection).where(Collection.name == data.collection_name)
    collection = session.exec(statement).first()
    if not collection:
        collection = Collection(name=data.collection_name)
        session.add(collection)
        session.commit()
        session.refresh(collection)
    assert collection.id is not None
    new_clothe = Clothes.model_validate(
        {**data.model_dump(), "collection_name": collection.name}
    )

    session.add(new_clothe)
    session.commit()
    session.refresh(new_clothe)

    return new_clothe


def update_clothe(
    clothe_id: int, data: ClothesForms, session: Session
) -> Clothes | None:
    clothe = session.get(Clothes, clothe_id)
    if not clothe:
        return None
    dumped_data = data.model_dump(exclude_unset=True)
    for atribute, value in dumped_data.items():
        setattr(clothe, atribute, value)
    session.add(clothe)
    session.commit()
    session.refresh(clothe)
    return clothe


def delete_clothe(clothe_id: int, session: Session) -> bool:
    clothe = session.get(Clothes, clothe_id)
    if not clothe:
        return False
    session.delete(clothe)
    session.commit()
    return True
