import { odontoFhirApi } from "../fhir.api"

export const getHallazgoByEncounterId = async (encounterId) => {
  try {
    const response = await odontoFhirApi.get(`/Condition?encounter=Encounter/${encounterId}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener los hallazgos.'
  }
}

export const getHallazgoByPatientId = async (patientId) => {
  try {
    const response = await odontoFhirApi.get(`/Condition?subject=Patient/${patientId}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener los hallazgos del paciente.'
  }
}

export const getHallazgoByPatientIdAndToothCode = async (patientId, toothCode) => {
  try {
    const response = await odontoFhirApi.get(`/Condition?subject=Patient/${patientId}&body-site=${toothCode}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener los hallazgos del paciente.'
  }
}