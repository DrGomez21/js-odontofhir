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

