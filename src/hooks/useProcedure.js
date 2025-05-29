import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { getProcedureById, getAllProcedures, getProcedureByEncounterId, getProcedureByPatientId, getProcedureByReference } from "../api/procedure/get-procedure.action"
import { addProcedure } from "../api/procedure/add-procedure.action"
import { odontoFhirApi } from "../api/fhir.api"


export const useGetResourceByReference = (reference) => {
  return useQuery({
    queryKey: ['resource', reference],
    queryFn: async () => {
      const { data } = await odontoFhirApi.get(`/${reference}`);
      return data;
    },
    enabled: !!reference
  });
}

export const useGetProcedureById = (id) => {
  return useQuery({
    queryKey: ['procedimiento', id],
    queryFn: () => getProcedureById(id),
  })
}

export const useGetAllProcedures = () => {
  return useQuery({
    queryKey: ['procedimientos'],
    queryFn: () => getAllProcedures(),
  })
}

export const useGetProceduresByEncounterId = (encounterId) => {
  return useQuery({
    queryKey: ['procedimientos', encounterId],
    queryFn: () => getProcedureByEncounterId(encounterId),
  })
}

export const useGetProceduresByPatientId = (patientId) => {
  return useQuery({
    queryKey: ['procedimientos', patientId],
    queryFn: () => getProcedureByPatientId(patientId),
  })
}

export const useGetProcedureByReference = (reference) => {
  return useQuery({
    queryKey: ['procedimiento', reference],
    queryFn: () => getProcedureByReference(reference),
  })
}

// Mutations
export const useAddProcedure = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addProcedure,
    onSuccess: () => {
      // Invalidamos la caché.
      queryClient.invalidateQueries({ queryKey: ['procedimientos'] })
    }
  })
}