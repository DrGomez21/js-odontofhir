import { odontoFhirApi } from '../fhir.api.js'

export const getPatientByIdAction = async (patientId) => {
  try {
    const { data } = await odontoFhirApi.get(`/Patient/${patientId}`)
    return data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener el paciente por ID'
  }
}