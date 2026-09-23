from fastapi import APIRouter, Depends, HTTPException, status
from petalle_research.services import clothes_services, collection_services
from petalle_research.db.connect_db import get_session
from petalle_research.schemas.clothes_schemas import ClothesForms
from sqlmodel import Session

router = APIRouter(prefix="/api/v1/clothes", tags=["Clothes"])


@router.get("/", summary="Listar todos os vestidos e acessórios.")
def get_all_clothes(session: Session = Depends(get_session)):
    clothes_list = clothes_services.get_all_clothes(session)
    if clothes_list == []:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Não foi encontrado nenhum vestido ou acessório.",
        )
    return {
        "status_code": status.HTTP_200_OK,
        "data": clothes_list,
        "message": "Vestidos e acessórios listados com sucesso.",
    }


@router.get("/{clothe_id}", summary="Procurar vestido ou acessório por ID.")
def get_clothe_by_id(clothe_id: int, session: Session = Depends(get_session)):
    clothe = clothes_services.get_clothe_by_id(clothe_id, session)
    if not clothe:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="O vestido ou acessório especificado não foi encontrado.",
        )
    return {
        "status_code": status.HTTP_200_OK,
        "data": clothe,
        "message": "Vestido ou acessório encontrado com sucesso.",
    }


@router.post("/", summary="Criar um novo vestido ou acessório.")
def register_clothe(data: ClothesForms, session: Session = Depends(get_session)):
    new_clothe = clothes_services.register_clothe(data, session)
    return {
        "status_code": status.HTTP_200_OK,
        "data": new_clothe,
        "message": "Vestido ou acessório criado com sucesso.",
    }


@router.put(
    "/{clothe_id}",
    summary="Atualizar um vestido ou acessório pré-existente, de acordo com o ID.",
)
def update_clothe(
    clothe_id: int, data: ClothesForms, session: Session = Depends(get_session)
):
    up_clothe = clothes_services.update_clothe(clothe_id, data, session)
    if not up_clothe:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Vestido ou acessório não encontrado.",
        )
    return {
        "status_code": status.HTTP_200_OK,
        "data": up_clothe,
        "message": "Informação de vestido ou acessório atualizado com sucesso.",
    }


@router.delete(
    "/{clothe_id}",
    summary="Deletar um vestido ou acessório pré-existente, de acordo com o ID.",
)
def delete_clothe(clothe_id: int, session: Session = Depends(get_session)):
    result = clothes_services.delete_clothe(clothe_id, session)
    if not result:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Vestido ou acessório não encontrado.",
        )
    return {
        "status_code": status.HTTP_200_OK,
        "message": "Clothe deletada com sucesso.",
    }
