import { odontoFhirApi } from "../fhir.api";

export const addHallazgo = async (hallazgo) => {
  const { data } = await odontoFhirApi.post('/Condition', hallazgo);
  return data
}