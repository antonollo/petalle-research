import type { CardProps } from "../types/CardProps";
import { useNavigate } from "react-router-dom";

const Card = ({ title, subtitle, children }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div className="text-black bg-main rounded-md shadow-lg shadow-main font-button w-max h-max p-12 flex flex-col items-center text-center gap-8">
      <hgroup className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="text-md">{subtitle}</h2>
      </hgroup>
      {children}
    </div>
  );
};

export default Card;
