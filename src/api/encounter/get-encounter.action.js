import { odontoFhirApi } from "../fhir.api"

export const getEncounterByPatientId = async (patientId) => {
  try {
    const { data } = await odontoFhirApi.get(`/Encounter?subject=Patient/${patientId}`)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    throw 'Error al obtener las consultas del paciente solicitado.'
  }
}

export const getEncounterById = async (encounterId) => {
  try {
    const { data } = await odontoFhirApi.get(`/Encounter/${encounterId}`)
    return data
  } catch (error) {
    console.log(error)
    throw 'Error al obtener la consulta solicitada.'
  }
}