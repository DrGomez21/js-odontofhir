import { useGetResourceByReference } from '../../hooks/useProcedure'
import { ProcedureCard } from '../cards/ProcedureCard'
import { HallazgoCard } from '../cards/HallazgoCard'

export const ReasonReferenceItem = ({ reference, onUpdater }) => {
  const { data: resource, isLoading, isError } = useGetResourceByReference(reference);

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error cargando {reference}</p>;

  if (resource.resourceType === 'Procedure') {
    return <ProcedureCard procedure={resource} />;
  }

  if (resource.resourceType === 'Observation') {
    return <HallazgoCard condition={resource} />;
  }

  return <p>Tipo de recurso desconocido: {resource.resourceType}</p>;
};


