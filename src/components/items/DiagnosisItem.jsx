import { useEffect } from 'react'
import { useGetHallazgoByReference } from '../../hooks/useHallazgo'
import { HallazgoCard } from '../cards/HallazgoCard'

export const DiagnosisItem = ({ reference, onUpdater }) => {

  const { data: condition, isLoading, isError, error } = useGetHallazgoByReference(reference)

  // Usamos useEffect para evitar llamadas infinitas a onUpdater
  useEffect(() => {
    if (condition) {
      onUpdater(prevDientes => {
        // Verificamos si ya existe para no duplicar
        if (!prevDientes.some(d => d.id === condition.id)) {
          return [...prevDientes, condition]
        }
        return prevDientes
      })
    }
  }, [condition, onUpdater])

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Error...{error.message}</p>

  return <HallazgoCard key={reference} condition={condition} />
}
