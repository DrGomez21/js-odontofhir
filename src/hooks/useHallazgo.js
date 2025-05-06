import { useQuery, useQueryClient, useMutation, QueryClient } from "@tanstack/react-query";
import { addHallazgo } from "../api/hallazgos/add-hallazgo.action";
import { getHallazgoByEncounterId, getHallazgoByPatientId, getHallazgoByPatientIdAndToothCode } from "../api/hallazgos/get-hallazgo.action";
import { odontoFhirApi } from "../api/fhir.api";

export const useHallazgo = (encounterId, paciente, diente) => {

  const queryClient = useQueryClient();

  // Querys
  const hallazgosByEncounter = useQuery({
    queryKey: ["hallazgos", encounterId],
    queryFn: () => getHallazgoByEncounterId(encounterId),
    enabled: !!encounterId,
  });

  const hallazgosByPatient = useQuery({
    queryKey: ["hallazgos", paciente],
    queryFn: () => getHallazgoByPatientId(paciente),
    enabled: !!paciente,
  });

  const hallazgoByPatientAndTooth = useQuery({
    queryKey: ["hallazgos", paciente, diente],
    queryFn: () => getHallazgoByPatientIdAndToothCode(paciente, diente),
    enabled: !!diente
  })

  // Mutations
  // const hallazgoMutation = useMutation({
  //   mutationFn: addHallazgo,
  //   onSuccess: () => {
  //     console.log('Se agrego el hallazgo.')
  //     queryClient.invalidateQueries({ queryKey: ["hallazgos", paciente] })
  //     queryClient.invalidateQueries({ queryKey: ["hallazgos", paciente, diente] })
  //     console.log('Se invalidaron las queries.')
  //   },
  // })

  const hallazgoMutation = useMutation({
    mutationFn: addHallazgo,
    onSuccess: async newHallazgo => {
      // Insert optimista en caché.
      queryClient.setQueryData(
        ['hallazgos', paciente],
        prev => ({
          ...prev,
          entry: [
            ...prev.entry,
            { resource: newHallazgo }
          ]
        })
      )

      // refetch oficial
      await queryClient.invalidateQueries(['hallazgos', paciente])

      // recuperar el recurso nuevo por su _id
      const { data: bundleById } = await odontoFhirApi.get(`/Condition?subject=Patient/${paciente}&_id=${newHallazgo.id}`)
      // bundleById.entry[0].resource será tu recurso exacto
      // Volver a mergearlo:
      queryClient.setQueryData(
        ['hallazgos', paciente],
        prev => ({
          ...prev,
          entry: [
            ...prev.entry.filter(e => e.resource.id != newHallazgo.id),
            bundleById.entry[0]
          ]
        })
      )
    }
  })

  return {
    hallazgosByEncounter,
    hallazgosByPatient,
    hallazgoByPatientAndTooth,
    hallazgoMutation,
  }
}