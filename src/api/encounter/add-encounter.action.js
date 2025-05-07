import { odontoFhirApi } from "../fhir.api"

export const addEncounter = async (encounter) => {
  const { data } = await odontoFhirApi.post('/Encounter', encounter)
  return data
}