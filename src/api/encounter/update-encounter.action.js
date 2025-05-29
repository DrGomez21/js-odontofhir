import { odontoFhirApi } from "../fhir.api"

export const updateEncounterWithNewCondition = async ({ encounterId, conditionRef }) => {

  console.log('Actualizando encounter con nuevo observationRef:', conditionRef)
  console.log('EncounterId:', encounterId)

  // Primero obtenemos el encounter actual para verificar si tiene diagnosis
  const { data: encounter } = await odontoFhirApi.get(`/Encounter/${encounterId}`)

  const newReason = {
    reference: conditionRef // que en realidad es una Observation
  }

  if (!encounter.reasonReference) {
    encounter.reasonReference = []
  }

  encounter.reasonReference.push(newReason)


  // Actualizamos el encounter con el nuevo diagnosis.
  const { data } = await odontoFhirApi.put(`/Encounter/${encounterId}`, encounter)
  return data
}

export const updateEncounterWithNewProcedure = async ({ encounterId, procedureRef }) => {

  console.log('Actualizando encounter con nuevo procedureRef:', procedureRef)
  console.log('EncounterId:', encounterId)

  // Primero obtenemos el encounter actual para verificar si tiene diagnosis
  const { data: encounter } = await odontoFhirApi.get(`/Encounter/${encounterId}`)

  const newProcedure = {
    reference: procedureRef
  }

  if (!encounter.reasonReference) {
    encounter.reasonReference = []
  }

  encounter.reasonReference.push(newProcedure)

  // Actualizamos el encounter con el nuevo diagnosis.
  const { data } = await odontoFhirApi.put(`/Encounter/${encounterId}`, encounter)
  return data
}