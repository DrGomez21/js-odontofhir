import { odontoFhirApi } from "../fhir.api";

export const getAlergias = async (patientId) => {
  const { data } = await odontoFhirApi.get(`/AllergyIntolerance?patient=Patient/${patientId}`);
  return data
}

export const getAllAlergias = async () => {
  const { data } = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_ALERGIASINTOLERANCIAS);
  return data
}
