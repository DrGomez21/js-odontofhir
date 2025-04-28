import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { allPatientsAction } from "../api/patients/all-patients.action"
import { addPatientAction } from "../api/patients/add-patient.action"

export const usePatient = () => {

  const queryClient = useQueryClient()

  // Querys
  const allPatients = useQuery({
    queryKey: ['patients', 'allPatients'],
    queryFn: allPatientsAction,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const { mutate } = useMutation({
    mutationFn: addPatientAction,
    onSuccess: (newPatient) => {

      // Invalidamos la caché
      queryClient.invalidateQueries({ queryKey: ['patients'] })

      // Actualizar caché de react-query
      queryClient.setQueryData(['patients'], (oldData) => {
        if (oldData == null) return [newPatient]
        return [...oldData, newPatient]
      })
    }
  })

  return {
    allPatients,
    mutate,
  }

}