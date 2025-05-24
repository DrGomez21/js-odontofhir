import { odontoFhirApi } from "../fhir.api";

export const getAlergias = async (patientId) => {
  const { data } = await odontoFhirApi.get(`/AllergyIntolerance?patient=Patient/${patientId}`);
  return data
}

export const getAllAlergias = async () => {
  const { data } = await odontoFhirApi.get('/CodeSystem/602');
  return data
}
