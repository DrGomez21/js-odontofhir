import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getEncounterById, getEncounterByPatientId } from "../api/encounter/get-encounter.action"
import { addEncounter } from "../api/encounter/add-encounter.action"
import { updateEncounterWithNewCondition } from "../api/encounter/update-encounter.action"

export const useEncounter = (patientId) => {

  const queryClient = useQueryClient()

  const patientEncounter = useQuery({
    queryKey: ['encounter', patientId],
    queryFn: () => getEncounterByPatientId(patientId)
  })

  const { mutate } = useMutation({
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

export const useGetEncounterById = (id) => {
  return useQuery({
    queryKey: ['encounter', id],
    queryFn: () => getEncounterById(id)
  })
}

export const useMutateEncounterWithCondition = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: updateEncounterWithNewCondition,
    onSuccess: (encounter) => {
      queryClient.invalidateQueries(['encounter', encounter.id])
    }
  })
}