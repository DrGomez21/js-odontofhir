import { useState } from "react"
import { Indicator } from "../Indicator";
import { Eye } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export const ConsultaCard = ({ encounter, paciente }) => {

  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  const options = { timeZone: 'UTC', year: 'numeric', month: 'numeric', day: 'numeric' };

  const handleClick = () => {
    console.log('HOLA')
  }

  const goToDetails = (id) => {
    navigate(`/patient/${paciente}/consulta/${id}`)
  }

  return (
    <div
      className='bg-white p-2 border rounded-md m-1 hover:bg-gray-100 cursor-pointer transition-all duration-100'
      onClick={() => goToDetails(encounter.id)}
    >
      <span className="font-medium text-[#4a4a4a]">Consulta del: {new Date(encounter.period.start).toLocaleDateString(undefined, options)}</span>
      <Indicator estado={encounter.status} />
      {visible && encounter.class.code != null && (
        <p className="mt-2">Tipo de consulta: {encounter.class.display}</p>
      )}
      {visible && encounter.status === 'finished' && encounter.period.end != null && (
        <p>Finalizado el: {new Date(encounter.period.end).toLocaleDateString(undefined, options)}</p>
      )}
      {visible && (
        <div className="flex w-full justify-end">
          <button className="mt-1 p-2 bg-gray-200 rounded-md hover:cursor-pointer"><Eye /></button>
        </div>
      )
      }
    </div>
  )
}