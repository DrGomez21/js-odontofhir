import { useEffect } from 'react'
import { useGetProcedureByReference } from '../../hooks/useProcedure'
import { ProcedureCard } from '../cards/ProcedureCard'

export const ProcedureList = ({ reference, onUpdater }) => {

  const { data: procedure, isLoading, isError, error } = useGetProcedureByReference(reference)

  // Usamos useEffect para evitar llamadas infinitas a onUpdater
  // useEffect(() => {
  //   if (procedure) {
  //     onUpdater(prevDientes => {
  //       // Verificamos si ya existe para no duplicar
  //       if (!prevDientes.some(d => d.id === procedure.id)) {
  //         return [...prevDientes, procedure]
  //       }
  //       return prevDientes
  //     })
  //   }
  // }, [procedure, onUpdater])

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Error...{error.message}</p>

  return <ProcedureCard key={procedure.id} procedure={procedure} />
}


// 