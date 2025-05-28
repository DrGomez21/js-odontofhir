import { odontoFhirApi } from "../fhir.api";

/*Se cambia por Observation */

export const addHallazgo = async (hallazgo) => {
  const { data } = await odontoFhirApi.post('/Observation', hallazgo);
  return data
}