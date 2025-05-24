import { alergiaPatientMapper } from "../../infraestructure/mappers/alergiaPatient.mapper";
import { odontoFhirApi } from "../fhir.api";

export const addAlergia = async (alergia, patient) => {
  
  // Formatear el objeto de alergia según el estándar FHIR
  const alergiaResource = alergiaPatientMapper(alergia, patient);
  if (!alergiaResource) {
    throw new Error("Error al formatear la alergia.");
  }

  const { data } = await odontoFhirApi.post('/AllergyIntolerance', alergiaResource)
  return data.concept;
}
