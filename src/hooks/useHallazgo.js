import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addHallazgo } from "../api/hallazgos/add-hallazgo.action";
import { getHallazgoByEncounterId, getHallazgoByPatientId, getHallazgoByPatientIdAndToothCode, getHallazgoByReference } from "../api/hallazgos/get-hallazgo.action";

// Querys
export const useHallazgosByEncounter = (encounterId) => {
  return useQuery({
    queryKey: ["hallazgos", encounterId],
    queryFn: () => getHallazgoByEncounterId(encounterId),
    enabled: !!encounterId,
  });
}

export const useHallazgosByPatient = (paciente) => {
  return useQuery({
    queryKey: ["hallazgos", paciente],
    queryFn: () => getHallazgoByPatientId(paciente),
    enabled: !!paciente,
  });
}

export const useHallazgoByPatientAndTooth = (paciente, diente) => {
  return useQuery({
    queryKey: ["hallazgos", paciente, diente],
    queryFn: () => getHallazgoByPatientIdAndToothCode(paciente, diente),
    enabled: !!diente
  })
}

export const useGetHallazgoByReference = (conditionReference) => {
  return useQuery({
    queryKey: ["hallazgo", conditionReference],
    queryFn: () => getHallazgoByReference(conditionReference)
  })
}

// Mutations
// Agregar un nuevo hallazgo.
export const useHallazgoMutation = (paciente) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addHallazgo,
    onSuccess: () => {
      console.log('Se agrego el hallazgo.')
      queryClient.invalidateQueries({ queryKey: ["hallazgos", paciente] })
      console.log('Se invalidaron las queries.')
    },
  })
}

// const hallazgoMutation = useMutation({
//   mutationFn: addHallazgo,
//   onSuccess: async newHallazgo => {
//     // Insert optimista en caché.
//     queryClient.setQueryData(
//       ['hallazgos', paciente],
//       prev => ({
//         ...prev,
//         entry: [
//           ...prev.entry,
//           { resource: newHallazgo }
//         ]
//       })
//     )

//     // refetch oficial
//     await queryClient.invalidateQueries(['hallazgos', paciente])

//     // recuperar el recurso nuevo por su _id
//     const { data: bundleById } = await odontoFhirApi.get(`/Condition?subject=Patient/${paciente}&_id=${newHallazgo.id}`)
//     // bundleById.entry[0].resource será tu recurso exacto
//     // Volver a mergearlo:
//     queryClient.setQueryData(
//       ['hallazgos', paciente],
//       prev => ({
//         ...prev,
//         entry: [
//           ...prev.entry.filter(e => e.resource.id != newHallazgo.id),
//           bundleById.entry[0]
//         ]
//       })
//     )
//   }
// })
