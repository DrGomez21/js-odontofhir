import { odontoFhirApi } from '../fhir.api.js'

export const getPatientByIdAction = async (patientId) => {
  const { data } = await odontoFhirApi.get(`/Patient/${patientId}`)
  return data
}