import { useState } from "react";
import { obtenerNumeroPorCodigo } from "../../infraestructure/mappers/AnatomiaDental.mapper";

export const HallazgoCard = ({ condition }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  const dienteCode = condition.bodySite?.coding?.[0]?.code;
  const numeroDiente = dienteCode ? obtenerNumeroPorCodigo(dienteCode) : "¿?";

  const hallazgo = condition.code?.coding?.[0]?.display ?? "Sin descripción";

  return (
    <div
      className='bg-white p-2 border rounded-md m-1 hover:bg-gray-100 cursor-pointer transition-all duration-100'
      onClick={handleClick}
    >
      <p className="font-medium text-[#4a4a4a]">Diente: {numeroDiente}</p>
      <span className="font-medium text-[#4a4a4a]">Hallazgo: {hallazgo}</span>
    </div>
  );
};
