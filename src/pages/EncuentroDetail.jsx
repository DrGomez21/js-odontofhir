import { useParams } from "react-router-dom"
import { useGetPatient } from "../hooks/usePatient"
import { useGetEncounterById } from "../hooks/useEncounter"
import { useState } from "react"
import { useSeparadorHallazgosProcedimientos } from "../hooks/useSeparadorHallazgosProcedimientos";
import { ConsultaOdontograma } from "../components/nuevos/ConsultaOdontograma"
import { Header } from "../components/basics/Header"
import { ProcedureCard } from "../components/cards/ProcedureCard"
import { HallazgoCard } from "../components/cards/HallazgoCard"

export const EncuentroDetail = () => {
  const { id, idconsulta } = useParams()

  const [showOdontograma, setShowOdontograma] = useState(false)
  const [dientesConHallazgos, setDientesConHallazgos] = useState([])

  const paciente = useGetPatient(id)
  const consulta = useGetEncounterById(idconsulta)

  // Prevención para evitar error de hooks en render incompleto
  const reasonRef = consulta.data?.reasonReference ?? []
  const { observations: hallazgos, procedures: procedimientos, isLoading } = useSeparadorHallazgosProcedimientos(reasonRef);

  if (paciente.isLoading || consulta.isLoading || isLoading) return <p>Cargando...</p>
  if (paciente.isError || consulta.isError) return <p>Error...</p>

  return (
    <div>
      <Header />
      <h1 className="px-6 mt-4 font-bold text-[#4A4A4A] col-span-2 text-3xl">Detalles de la consulta</h1>

      <div className="w-full flex items-center justify-center px-6 mt-4 mb-4">
        <ConsultaOdontograma pacienteId={id} consultaId={idconsulta} dientesHallazgos={hallazgos} dientesProcedimientos={procedimientos} />
      </div>

      <div className="grid grid-cols-2 gap-4 px-6 mt-4 mb-4">

        {/* HALLAZGOS */}
        <div className="col-span-1 mt-4">
          <div className="flex items-center justify-between px-2 py-2 w-full bg-white rounded-md mb-2">
            <h2 className="font-bold text-[#4A4A4A] text-2xl">Hallazgos</h2>
            <button
              className="flex items-center justify-center w-8 h-8 border-2 border-[#4a4a4a] rounded-md bg-cyan-200 hover:cursor-pointer hover:scale-95 transition-all duration-100"
              onClick={() => setShowOdontograma(!showOdontograma)}>
              {showOdontograma ? 'X' : '+'}
            </button>
          </div>

          {showOdontograma && (
            <ConsultaOdontograma pacienteId={id} consultaId={idconsulta} dientesHallazgos={hallazgos} dientesProcedimientos={procedimientos} />
          )}

          {hallazgos.length === 0 ? (
            <p className="mt-2">No hay hallazgos en la consulta</p>
          ) : (
            <div className="flex flex-col gap-2 rounded-md bg-white p-4 overflow-y-scroll mt-2">
              <p>Hay {hallazgos.length} hallazgos en la consulta</p>
              {hallazgos.map((obs) => (
                <HallazgoCard key={obs.id} condition={obs} />
              ))}
            </div>
          )}
        </div>

        {/* PROCEDIMIENTOS */}
        <div className="col-span-1 mt-4">
          <div className="flex items-center justify-between px-2 py-2 w-full bg-white rounded-md mb-2">
            <h2 className="font-bold text-[#4A4A4A] text-2xl">Procedimientos</h2>
            <button
              className="flex items-center justify-center w-8 h-8 border-2 border-[#4a4a4a] rounded-md bg-cyan-200 hover:cursor-pointer hover:scale-95 transition-all duration-100"
              onClick={() => setShowOdontograma(!showOdontograma)}>
              {showOdontograma ? 'X' : '+'}
            </button>
          </div>

          {procedimientos.length === 0 ? (
            <p className="mt-2">No hay procedimientos en la consulta</p>
          ) : (
            <div className="flex flex-col gap-2 rounded-md bg-white p-4 overflow-y-scroll mt-2">
              <p>Hay {procedimientos.length} procedimientos en la consulta</p>
              {procedimientos.map((proc) => (
                <ProcedureCard key={proc.id} procedure={proc} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}


/**
 * 
 * 
        <div className="col-span-1 mt-4">
          <div className="flex items-center justify-between px-2 py-2 w-full bg-white rounded-md mb-2">
            <h2 className="font-bold text-[#4A4A4A] text-2xl">Procedimientos</h2>
            <button
              className="flex items-center justify-center w-8 h-8 border-2 border-[#4a4a4a] rounded-md bg-cyan-200 hover:cursor-pointer hover:scale-95 transition-all duration-100"
              onClick={() => setShowOdontogramaProcedimiento(!showOdontogramaProcedimiento)}>
              {showOdontogramaProcedimiento ? 'X' : '+'}
            </button>
          </div>
          {
            showOdontogramaProcedimiento && (
              <>
              /*
                <ConsultaOdontograma pacienteId={id} consultaId={idconsulta} dientesHallazgos={dientesConHallazgos} />
              </>
            )
          }
          {
            !consulta.data.diagnosis ? (
              <p className="mt-2">No hay hallazgos en la consulta</p>
            ) : (
              <div className="flex flex-col gap-2 rounded-md bg-white p-4 overflow-y-scroll max-h-64 mt-2">
                <p>Hay {consulta.data.diagnosis.length} hallazgos en la consulta</p>
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

 * 
 * 
 */