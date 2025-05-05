import { useQuery, useQueryClient, useMutation, QueryClient } from "@tanstack/react-query";
import { addHallazgo } from "../api/hallazgos/add-hallazgo.action";
import { getHallazgoByEncounterId, getHallazgoByPatientId, getHallazgoByPatientIdAndToothCode } from "../api/hallazgos/get-hallazgo.action";

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
  const hallazgoMutation = useMutation({
    mutationFn: addHallazgo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hallazgos", paciente] })
      queryClient.refetchQueries(["hallazgos", paciente])
      queryClient.refetchQueries(["hallazgos", paciente, diente])
    }
  })

  return {
    hallazgosByEncounter,
    hallazgosByPatient,
    hallazgoByPatientAndTooth,
    hallazgoMutation,
  }
}