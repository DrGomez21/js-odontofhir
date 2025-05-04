import { useState } from "react"
import { obtenerNumeroPorCodigo } from "../../infraestructure/mappers/AnatomiaDental.mapper"

export const HallazgoCard = ({condition}) => {

  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div
      className='bg-white p-2 border rounded-md m-1 hover:bg-gray-100 cursor-pointer transition-all duration-100'
      onClick={handleClick}
    >
      {console.log(condition.bodySite[0].coding[0].code)}
      <p className="font-medium text-[#4a4a4a]">Diente: {obtenerNumeroPorCodigo(condition.bodySite[0].coding[0].code)}</p>
      <span className="font-medium text-[#4a4a4a]">Hallazgo: {condition.code.coding[0].display}</span>
    </div>
  )
}