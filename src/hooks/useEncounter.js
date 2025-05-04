import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getEncounterByPatientId } from "../api/encounter/get-encounter.action"
import { addEncounter } from "../api/encounter/add-encounter.action"

export const useEncounter = (patientId) => {

  const queryClient = useQueryClient()

  const patientEncounter = useQuery({
    queryKey: ['encounter', patientId],
    queryFn: () => getEncounterByPatientId(patientId),
    staleTime: 1000 * 60 * 5
  })

  const {mutate} = useMutation({
    mutationFn: addEncounter,
    onSuccess: () => {
      // Invalidamos la caché.
      queryClient.invalidateQueries({ queryKey: ['encounter', patientId] })
    }
  })

  return {
    patientEncounter,
    mutate,
  }
}