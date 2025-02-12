import { useQuery } from "@tanstack/react-query"
import { getAllPatients } from "../api/fhir.api"

export const usePatient = () => {
  
  const { data, isLoading, error, isError, isSuccess } = useQuery({
    queryKey: ['patients'],
    queryFn: getAllPatients,
    staleTime: 1000 * 60 * 5
  })

  /**
   * Los pacientes están en el arreglo entry,
   * Entonces, una ve tenemos la data (respuesta de la API)
   * accedemos a su campo entry, desde ahí obtenemos solo el resource.
   * En caso de no haber datos se manda un arreglo vacío
   */
  const patients = data ? data.entry.map((entry) => entry.resource) : []

  return {
    entries: data,
    patients,
    isLoading,
    error,
    isError,
    isSuccess
  }

}