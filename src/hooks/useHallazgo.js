import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addHallazgo } from "../api/hallazgos/add-hallazgo.action";
import { getHallazgoByEncounterId, getHallazgoByPatientId, getHallazgoByPatientIdAndToothCode } from "../api/hallazgos/get-hallazgo.action";

export const useHallazgo = (encounterId, paciente, diente) => {
  
  // const queryClient = useQueryClient();

  // Querys
  const hallazgosByEncounter = useQuery({
    queryKey: ["hallazgos", encounterId],
    queryFn: () => getHallazgoByEncounterId(encounterId),
    staleTime: 1000 * 60 * 5,
    enabled: !!encounterId,
  });

  const hallazgosByPatient = useQuery({
    queryKey: ["hallazgos", paciente],
    queryFn: () => getHallazgoByPatientId(paciente),
    staleTime: 1000 * 60 * 5,
    enabled: !!paciente,
  });

  const hallazgoByPatientAndTooth = useQuery({
    queryKey: ['hallazgo', paciente, diente],
    queryFn: () => getHallazgoByPatientIdAndToothCode(paciente, diente),
    staleTime: 1000 * 60 * 5,
    enabled: !!diente
  })

  // Mutations

  return {
    hallazgosByEncounter,
    hallazgosByPatient,
    hallazgoByPatientAndTooth,
  }
}