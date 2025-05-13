import { odontoFhirApi } from '../fhir.api.js'

export const addPatientAction = async (patient) => {
  try {
    const response = await odontoFhirApi.post('/Patient', patient, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    return response
  } catch (error) {
    console.log(error)
    throw 'Error al registrar el paciente'
  }
}