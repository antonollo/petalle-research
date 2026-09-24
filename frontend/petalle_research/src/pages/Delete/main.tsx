import React from "react";
import Card from "../../layouts/Card";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const navigate = useNavigate();
  return (
    <Card
      title="Deletar vestidos ou acessórios"
      subtitle="Gostaria de deletar esse vestido?"
    >
      Delete
      <button
        className="w-full text-main font-bold bg-hovering rounded-md p-3 cursor-pointer transition-colors duration-200 hover:shadow-black hover:shadow-md hover:bg-black hover:text-main"
        onClick={() => navigate(-1)}
      >
        Voltar ao Menu
      </button>
    </Card>
  );
};

export default Delete;
