import { odontoFhirApi } from "../fhir.api";

export const addProcedure = async (procedure) => {
  const { data } = await odontoFhirApi.post("/Procedure", procedure);
  return data;
}
