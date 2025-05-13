import { odontoFhirApi } from "../fhir.api"

export const getEncounterByPatientId = async (patientId) => {
  const { data } = await odontoFhirApi.get(`/Encounter?subject=Patient/${patientId}`)
  return data
}

export const getEncounterById = async (encounterId) => {
  const { data } = await odontoFhirApi.get(`/Encounter/${encounterId}`)
  return data
}