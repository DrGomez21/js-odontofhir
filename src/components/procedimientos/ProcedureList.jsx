import { useGetProcedureByReference } from '../../hooks/useProcedure'
import { ProcedureCard } from '../cards/ProcedureCard'

export const ProcedureList = ({ reference, onUpdater }) => {

  const { data: procedure, isLoading, isError, error } = useGetProcedureByReference(reference)

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Error...{error.message}</p>

  return <ProcedureCard key={procedure.id} procedure={procedure} />
}


// 