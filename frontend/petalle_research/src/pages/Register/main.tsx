import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import Card from "../../layouts/Card";
import type { Clothe } from "../../types/Clothe";

const Register = () => {
  const [clotheName, setClotheName] = useState("");
  const [collectionName, setCollection] = useState("");
  const [clotheColor, setClotheColor] = useState("");
  const [clotheSize, setClotheSize] = useState(20);
  const [clothePrice, setClothePrice] = useState(200);
  const [clotheInfo, setClotheInfo] = useState({
    name: "",
    collection: "",
    color: "",
    size: 0,
    price: 0,
  });
  const navigate = useNavigate();
  const handleSubmit = useCallback((clotheInfo: Clothe) => {
    const clothes = localStorage.getItem("clothes");
    let clothesList: Array<Clothe> = clothes ? JSON.parse(clothes) : [];
    clothesList.push(clotheInfo);
    localStorage.setItem("clothes", JSON.stringify(clothesList));
    navigate("/");
  }, []);

  return (
    <Card
      title="Adicionar novo vestido"
      subtitle="Insira informações pertinentes ao novo vestido ou acessório"
    >
      <form
        action=""
        className="flex flex-col gap-2 w-full"
        onSubmit={() => handleSubmit(clotheInfo)}
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
        />
        <label htmlFor="collection">Coleção do Vestido: </label>
        <select
          name="collection"
          id="collection"
          className="focus:outline-none bg-hovering p-2 rounded-md text-white mb-4"
          onChange={(e) => setCollection(e.target.value)}
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
          defaultValue={0}
          min={20}
          max={50}
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
        />
        <button
          type="submit"
          className="text-main bg-hovering rounded-md p-3 cursor-pointer transition-colors duration-200 hover:shadow-black hover:shadow-md hover:bg-black hover:text-main font-bold"
          onClick={() =>
            setClotheInfo({
              name: clotheName,
              collection: collectionName,
              color: clotheColor,
              size: clotheSize,
              price: clothePrice,
            })
          }
        >
          Registrar novo vestido/acessório
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

export default Register;
