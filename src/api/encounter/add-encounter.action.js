import toast from "react-hot-toast";
import { odontoFhirApi } from "../fhir.api"

export const addEncounter = (encounter) => {
  try {
    const response = odontoFhirApi.post('/Encounter', encounter, {
      headers: {
        'Content-Type': 'application/fhir+json',
      }
    })
    toast.success('Consulta registrada')
    return response
  } catch (error) {
    console.error('Error al agregar el encuentro:', error);
    toast.error('No se pudo registrar la consulta.')
    throw 'Error al registrar encuentro.'; // Re-lanzar el error para que pueda ser manejado por el llamador
  }
}