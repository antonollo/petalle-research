import React, { useEffect, useState } from "react";
import Card from "../../layouts/Card";
import { useNavigate, useParams } from "react-router-dom";
import type { ClotheForms } from "../../types/Clothe";
import { getClotheByID, updateClothe } from "../../services/clotheService";

const Update = () => {
  const navigate = useNavigate();
  let params = useParams();
  async function handleSubmit(clotheInfo: ClotheForms, id: number) {
    await updateClothe(clotheInfo, id);
    navigate("/");
  }

  useEffect(() => {
    async function loadClothe() {
      const clothe = await getClotheByID(Number(params.id));
      setClothesInfo(clothe.data);
    }
    loadClothe();
  }, []);
  const [clothesInfo, setClothesInfo] = useState<ClotheForms>();
  const [clotheName, setClotheName] = useState(clothesInfo!.name);
  const [collection, setCollection] = useState(clothesInfo!.collection_name);
  const [clotheColor, setClotheColor] = useState(clothesInfo!.color);
  const [clotheSize, setClotheSize] = useState(clothesInfo!.size_num);
  const [clothePrice, setClothePrice] = useState(clothesInfo!.price);
  return (
    <Card
      title="Atualizar informações de um vestido"
      subtitle="Insira o nome do vestido para pesquisar e atualizar informações"
    >
      <form
        action=""
        className="flex flex-col gap-2 w-full"
        onSubmit={() => handleSubmit(clothesInfo, Number(params.id))}
      >
        <label htmlFor="name">Nome do Vestido: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome do vestido"
          className="focus:outline-none bg-hovering p-2 rounded-md text-white mb-4"
          required
          onChange={(e) => setClotheName(e.target.value)}
          defaultValue={clotheName}
        />
        <label htmlFor="collection">Coleção do Vestido: </label>
        <select
          name="collection"
          id="collection"
          className="focus:outline-none bg-hovering p-2 rounded-md text-white mb-4"
          onChange={(e) => setCollection(e.target.value)}
          defaultValue={collection}
        >
          <option value="Yasmim">Yasmim</option>
          <option value="Petalle 2026">Petalle 2026</option>
          <option value="Gugu">Gugu</option>
        </select>
        <label htmlFor="color">Cor do Vestido: </label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="Cor do vestido"
          className="focus:outline-none bg-hovering p-2 rounded-md text-white mb-4"
          required
          onChange={(e) => setClotheColor(e.target.value)}
          defaultValue={clotheColor}
        />
        <label htmlFor="size_num">Tamanho (Numérico) do Vestido: </label>
        <input
          type="number"
          id="size_num"
          name="size_num"
          placeholder="Tamanho do vestido (Numérico)"
          className="focus:outline-none bg-hovering p-2 rounded-md text-white mb-4"
          required
          onChange={(e) => setClotheSize(Number(e.target.value))}
          value={clotheSize}
          min={20}
          max={50}
          defaultValue={clotheSize}
        />
        <label htmlFor="price">Preço do Vestido: </label>
        <input
          type="number"
          step={0.01}
          id="price"
          name="price"
          placeholder="Valor do vestido"
          className="focus:outline-none bg-hovering p-2 rounded-md text-white mb-4"
          required
          onChange={(e) => setClothePrice(Number(e.target.value))}
          value={clothePrice}
          min={200}
          max={500}
          defaultValue={clothePrice}
        />
        <button
          type="submit"
          className="text-main bg-hovering rounded-md p-3 cursor-pointer transition-colors duration-200 hover:shadow-black hover:shadow-md hover:bg-black hover:text-main font-bold"
          onClick={() =>
            setClothesInfo({
              name: clotheName,
              collection_name: collection,
              color: clotheColor,
              size_num: clotheSize,
              price: clothePrice,
            })
          }
        >
          Atualizar informações do vestido ou acessório
        </button>
      </form>
      <button
        className="w-full text-main font-bold bg-hovering rounded-md p-3 cursor-pointer transition-colors duration-200 hover:shadow-black hover:shadow-md hover:bg-black hover:text-main"
        onClick={() => navigate(-1)}
      >
        Voltar ao Menu
      </button>
    </Card>
  );
};

export default Update;
