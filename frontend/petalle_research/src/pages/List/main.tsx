import { useCallback, useEffect, useState } from "react";
import Card from "../../layouts/Card";
import type { Clothe } from "../../types/Clothe";
import { Link, useNavigate } from "react-router-dom";
import { getClothes, deleteClothe } from "../../services/clotheService";

const List = () => {
  const navigate = useNavigate();
  const [clothesArray, setClothesArray] = useState<Clothe[]>([]);
  useEffect(() => {
    console.log("Use Effect");
    async function loadClothes() {
      const clothes = await getClothes();
      setClothesArray(clothes.data);
    }
    console.log("User Effect 2");
    loadClothes();
  }, []);
  const generateTable = () => {
    return (
      <table className="text-center bg-white">
        <thead>
          <tr>
            <th className="p-4">Vestido</th>
            <th className="p-4">Coleção</th>
            <th className="p-4">Tamanho</th>
            <th className="p-4">Cor</th>
            <th className="p-4">Preço</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {clothesArray.map((clothe) => (
            <tr className="bg-[#ffdca9]" key={clothe.id}>
              <td className="p-4">{clothe.name}</td>
              <td className="p-4">{clothe.collection_name}</td>
              <td className="p-4">{clothe.size_num}</td>
              <td className="p-4">{clothe.color}</td>
              <td className="p-4">{clothe.price}</td>
              <td className="p-4">
                <div>
                  <Link
                    to={`/update/${clothe.id}`}
                    className="transition-all bg-blue-500 rounded-l-md p-2 duration-100 hover:font-bold"
                  >
                    Atualizar
                  </Link>

                  <button
                    onClick={() =>
                      deleteClothe(Number(clothe.id))
                    }
                    className="transition-all duration-100 bg-red-500 p-2 rounded-r-md hover:font-bold cursor-pointer"
                  >
                    Deletar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <Card
      title="Listar vestidos e acessórios cadastrados"
      subtitle="Realize ações para os vestidos e acessórios cadastrados."
    >
      <div className="p-4 w-full text-black flex flex-col gap-4 text-center">
        {clothesArray.length === 0 ? (
          <div>Nenhum vestido ou acessório cadastrado ainda.</div>
        ) : (
          generateTable()
        )}
      </div>
      <button
        className="w-full bg-hovering rounded-md p-3 cursor-pointer transition-colors duration-400 hover:shadow-black hover:shadow-md hover:bg-black hover:text-main"
        onClick={() => navigate(-1)}
      >
        Voltar ao Menu
      </button>
    </Card>
  );
};

export default List;
