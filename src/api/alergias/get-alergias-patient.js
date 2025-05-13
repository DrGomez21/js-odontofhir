import { odontoFhirApi } from "../fhir.api";

export const getAlergias = async (patientId) => {
  try {
    const response = await odontoFhirApi.get(`/AllergyIntolerance?patient=Patient/${patientId}`);
    return response.data; // Retorna la respuesta de la API
  } catch (error) {
    console.error('Error al agregar la alergia:', error);
    throw 'Error al registrar la alergia.'; // Re-lanzar el error para que pueda ser manejado por el llamador
  }
}
