from sqlmodel import Session, select
from petalle_research.models.collection_models import Collection
from petalle_research.models.clothes_models import Clothes


def get_all_colections(session: Session) -> list[Collection]:
    statement = select(Collection)
    collections_list = list(session.exec(statement).all())
    return collections_list


def register_collections(collection_name: str, session: Session) -> Collection | None:
    statement = select(Collection).where(Collection.name == collection_name)
    collection = session.exec(statement).first()
    if collection:
        return None
    new_collection = Collection(name=collection_name)
    session.add(new_collection)
    session.commit()
    session.refresh(new_collection)
    return new_collection


def update_collection(
    collection_id: int, collection_name: str, session: Session
) -> Collection | None:
    collection = session.get(Collection, collection_id)
    if not collection:
        return None
    collection.name = collection_name
    session.add(collection)
    session.commit()
    session.refresh(collection)
    return collection


def delete_collection(collection_id: int, session: Session) -> bool:
    collection = session.get(Collection, collection_id)
    if not collection:
        return False
    session.delete(collection)
    session.commit()
    return True
