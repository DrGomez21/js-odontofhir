import { useState } from "react"
import { obtenerNumeroPorCodigo } from "../../infraestructure/mappers/AnatomiaDental.mapper"

export const ProcedureCard = ({ procedure }) => {
  const { id, status, code, subject, performer, encounter, bodySite } = procedure

  const [detalles, setDetalles] = useState(false)

  return (
    <div
      className="bg-white text-[#4a4a4a] border-2 border-[#4a4a4a] p-4 w-full rounded-md shadow-md hover:cursor-pointer hover:bg-gray-100 transition-all duration-100"
      onClick={() => setDetalles(!detalles)}
    >
      <p className="font-semibold">{code.coding[0].display}</p>
      <p>Diente {obtenerNumeroPorCodigo(bodySite[0].coding[0].code)}: {bodySite[0].coding[0].display}</p>
      {detalles && (
        <p>{status}</p>
      )}
    </div>
  )
}