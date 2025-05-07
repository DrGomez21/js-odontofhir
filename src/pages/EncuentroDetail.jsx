import { useParams } from "react-router-dom"
import { useGetPatient } from "../hooks/usePatient"
import { useGetEncounterById } from "../hooks/useEncounter"
import { useState } from "react"
import { Odontograma } from "../components/Odontograma"
import { DiagnosisItem } from "../components/items/DiagnosisItem"
import { ConsultaOdontograma } from "../components/nuevos/ConsultaOdontograma"

export const EncuentroDetail = () => {

  // Obtener los id de paciente y de consulta
  const { id, idconsulta } = useParams()

  const [showOdontograma, setShowOdontograma] = useState(false)
  const [dientesConHallazgos, setDientesConHallazgos] = useState([])

  const paciente = useGetPatient(id)
  const consulta = useGetEncounterById(idconsulta)

  if (paciente.isLoading || consulta.isLoading) return <p>Cargando...</p>
  if (paciente.isError || consulta.isError) return <p>Error...</p>

  return (
    <div>
      <h1>HOLA DETALLES DEL ENCUENTRO</h1>
      <h2>Hallazgos</h2>
      <button className="border border-black p-2 cursor-pointer" onClick={() => setShowOdontograma(!showOdontograma)}>
        +
      </button>
      {
        showOdontograma && (
          <>
            <ConsultaOdontograma pacienteId={id} consultaId={idconsulta} dientesHallazgos={dientesConHallazgos} />
            {/* <Odontograma patient={paciente.data} consulta={idconsulta} /> */}
          </>
        )
      }
      {
        !consulta.data.diagnosis ? (
          <p>No hay hallazgos en la consulta</p>
        ) : (
          <div>
            <p>Hay ({consulta.data.diagnosis.length}) hallazgos</p>
            {
              consulta.data.diagnosis.map((diagnosis) => (
                <DiagnosisItem
                  key={diagnosis.condition.reference}
                  reference={diagnosis.condition.reference}
                  onUpdater={setDientesConHallazgos}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}