import { odontoFhirApi } from "../fhir.api"

export const getProcedureById = async (procedureId) => {
  const { data } = await odontoFhirApi.get(`Procedure/${procedureId}`)
  return data
}

export const getAllProcedures = async () => {
  const { data } = await odontoFhirApi.get(`Procedure`)
  return data
}

export const getProcedureByEncounterId = async (encounterId) => {
  const { data } = await odontoFhirApi.get(`Procedure?encounter=Encounter/${encounterId}`)
  return data
}

export const getProcedureByPatientId = async (patientId) => {
  const { data } = await odontoFhirApi.get(`Procedure?subject=Patient/${patientId}`)
  return data
}

export const getProcedureByReference = async (reference) => {
  const { data } = await odontoFhirApi.get(`/${reference}`)
  return data
}