import { useQueries } from "@tanstack/react-query"
import { odontoFhirApi } from "../api/fhir.api"


export const useSeparadorHallazgosProcedimientos = (references = []) => {

  const results = useQueries({
    queries: references.map((ref) => ({
      queryKey: ['resource', ref.reference],
      queryFn: async () => {
        const { data } = await odontoFhirApi.get(`/${ref.reference}`);
        return data;
      },
      enabled: !!ref.reference, 
    }))
  });

  const hallazgos = [];
  const procedimiento = [];

  results.forEach(({ data }) => {
    if (data?.resourceType === "Observation") {
      hallazgos.push(data);
    } else if (data?.resourceType === "Procedure") {
      procedimiento.push(data);
    }
  });

  // Verifica si alguna consulta aún está en carga
  const isLoading = results.some(result => result.isLoading);

  return {
    observations: hallazgos,
    procedures: procedimiento,
    isLoading
  };
}
