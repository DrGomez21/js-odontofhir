import { useState } from "react";
import { obtenerNumeroPorCodigo } from "../../infraestructure/mappers/AnatomiaDental.mapper";

export const ProcedureCard = ({ procedure }) => {
  const { code, bodySite, status } = procedure;
  const [detalles, setDetalles] = useState(false);

  // Manejo seguro de bodySite
  const siteCoding = bodySite?.[0]?.coding?.[0];
  const numeroDiente = siteCoding?.code ? obtenerNumeroPorCodigo(siteCoding.code) : "¿?";
  const displayDiente = siteCoding?.display ?? "Desconocido";

  return (
    <div
      className="bg-white text-[#4a4a4a] border-2 border-[#4a4a4a] p-4 w-full rounded-md shadow-md hover:cursor-pointer hover:bg-gray-100 transition-all duration-100"
      onClick={() => setDetalles(!detalles)}
    >
      <p className="font-semibold">{code?.coding?.[0]?.display ?? "Procedimiento sin descripción"}</p>
      <p>Diente {numeroDiente}: {displayDiente}</p>
      {detalles && (
        <p>{status ?? "sin estado"}</p>
      )}
    </div>
  );
};
