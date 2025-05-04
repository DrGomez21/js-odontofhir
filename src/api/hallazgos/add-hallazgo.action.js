import { odontoFhirApi } from "../fhir.api";

export const addHallazgo = async (hallazgo) => {
  try {
    const response = await odontoFhirApi.post('/Condition', hallazgo, {
      headers: {
        'Content-Type': 'application/fhir+json',
      },
    });
    return response
  } catch (error) {
    console.error('Error al agregar el hallazgo:', error);
    throw error;
  }
}