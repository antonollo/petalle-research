import Card from "../../layouts/Card";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Card title="Acervo Petalle" subtitle="Selecione uma das opções para começar.">
      <div className="font-semibold flex flex-col gap-4 text-main">
        <Link
          to="/register"
          className="bg-hovering rounded-md p-3 cursor-pointer transition-colors duration-200 hover:shadow-black hover:shadow-md hover:bg-black hover:text-main"
        >
          Adicionar novo vestido e/ou acessório.
        </Link>
        <Link
          to="/list"
          className="bg-hovering rounded-md p-3 cursor-pointer transition-colors duration-200 hover:shadow-black hover:shadow-md hover:bg-black hover:text-main"
        >
          Listar vestidos e/ou acessórios.
        </Link>
      </div>
    </Card>
  );
};

export default Menu;
