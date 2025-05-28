import { odontoFhirApi } from "../fhir.api"

/*Se cambia por Observation */

export const getHallazgoByEncounterId = async (encounterId) => {
  try {
    const response = await odontoFhirApi.get(`/Observation?encounter=Encounter/${encounterId}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener los hallazgos.'
  }
}

export const getHallazgoByPatientId = async (patientId) => {
  try {
    const response = await odontoFhirApi.get(`/Observation?subject=Patient/${patientId}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener los hallazgos del paciente.'
  }
}

export const getHallazgoByPatientIdAndToothCode = async (patientId, toothCode) => {
  try {
    const response = await odontoFhirApi.get(`/Observation?subject=Patient/${patientId}&body-site=${toothCode}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener los hallazgos del paciente.'
  }
}

export const getHallazgoByReference = async (conditionReference) => {
  const { data } = await odontoFhirApi.get(`/${conditionReference}`)
  return data
}