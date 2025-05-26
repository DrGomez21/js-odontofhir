import { odontoFhirApi } from "../fhir.api";

export const getPractitionerByIdAction = async (practitionerId) => {
  const { data } = await odontoFhirApi.get(`/Practitioner/${practitionerId}`);
  return data;
}

export const getPractitionerByCIAction = async (ci) => {
  const { data } = await odontoFhirApi.get(`/Practitioner?identifier=${ci}`)
  return data;
}