import React, { useCallback } from "react";
import Card from "../../layouts/Card";
import type { Clothe } from "../../types/Clothe";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const clothes = localStorage.getItem("clothes");
  const navigate = useNavigate();
  let clothesList: Clothe[] = clothes ? JSON.parse(clothes) : [];
  return (
    <Card
      title="Listar vestidos e acessórios cadastrados"
      subtitle="Realize ações para os vestidos e acessórios cadastrados."
    >
      <div className="p-4 w-full text-black flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span>Nome do Vestido</span>
          <span>Coleção</span>
          <span>Tamanho</span>
        </div>
        {clothesList.map((clothe) => (
          <div
            key={clothesList.indexOf(clothe)}
            className="bg-white rounded-md flex py-2 justify-between"
          >
            <span>{clothe.name}</span>

            <div>
              <Link
                to={"/update"}
                className="transition-all bg-blue-500 rounded-l-md p-2 duration-100 hover:font-bold"
              >
                Atualizar
              </Link>

              <Link
                to={"/delete"}
                className="transition-all duration-100 bg-red-500 p-2 rounded-r-md hover:font-bold"
              >
                Deletar
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-full bg-hovering rounded-md p-3 cursor-pointer transition-colors duration-200 hover:shadow-black hover:shadow-md hover:bg-black hover:text-main"
        onClick={() => navigate(-1)}
      >
        Voltar ao Menu
      </button>
    </Card>
  );
};

export default List;
