import { odontoFhirApi } from "../fhir.api";

export const deleteProcedure = async (procedureId) => {
  const { data } = await odontoFhirApi.delete(`Procedure/${procedureId}`);
  return data
}
