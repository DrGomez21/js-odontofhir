import { odontoFhirApi } from "../fhir.api"

export const updateEncounterWithNewCondition = async ({ encounterId, conditionRef }) => {
  
  console.log('Actualizando encounter con nuevo conditionRef:', conditionRef)
  console.log('EncounterId:', encounterId)
  
  // Primero obtenemos el encounter actual para verificar si tiene diagnosis
  const { data: encounter } = await odontoFhirApi.get(`/Encounter/${encounterId}`)
  
  const newDiagnosis = {
    condition: {
      reference: conditionRef
    }
  }

  if (!encounter.diagnosis) {
    encounter.diagnosis = []
  }

  encounter.diagnosis.push(newDiagnosis)

  // Actualizamos el encounter con el nuevo diagnosis.
  const { data } = await odontoFhirApi.put(`/Encounter/${encounterId}`, encounter)
  return data
}