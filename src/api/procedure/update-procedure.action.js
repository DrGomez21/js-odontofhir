import { odontoFhirApi } from "../fhir.api";

export const updateProcedure = async (procedureId, procedure) => {
  const data = await odontoFhirApi.put(`Procedure/${procedureId}`, procedure);
  return data
}
