import { alergiaPatientMapper } from "../../infraestructure/mappers/alergiaPatient.mapper";
import { odontoFhirApi } from "../fhir.api";

export const addAlergia = async (alergia, patient) => {
  // Formatear el objeto de alergia según el estándar FHIR
  const alergiaResource = alergiaPatientMapper(alergia, patient);
  if (!alergiaResource) {
    throw new Error("Error al formatear la alergia.");
  }

  try {
    const response = await odontoFhirApi.post('/AllergyIntolerance', alergiaResource, {
      headers: {
        'Content-Type': 'application/fhir+json',
      },
    });
    return response.data; // Retorna la respuesta de la API
  } catch (error) {
    console.error('Error al agregar la alergia:', error);
    throw 'Error al registrar la alergia.'; // Re-lanzar el error para que pueda ser manejado por el llamador
  }
}
