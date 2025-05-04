// Debo recibir el id del paciente y construir el objeto de alergia
// Basado en FHIR

export const alergiaPatientMapper = (alergia, pacienteId) => {
  if (!alergia || !pacienteId) {
    throw new Error("Invalid input: alergia and pacienteId are required.");
  }
  if (typeof pacienteId !== 'string') return null
  if (typeof alergia !== 'object') return null
  if (!alergia.clinicalStatus || !alergia.type || !alergia.code || !alergia.display) {
    throw new Error("Invalid alergia object: missing required properties.");
  }
  const alergiaResource = {
    resourceType: 'AllergyIntolerance',
    meta: {
      profile: [
        "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-AllergyIntolerance-1"
      ]
    },
    patient: {
      reference: `Patient/${pacienteId}`
    },
    clinicalStatus: {
      coding: [
        {
          code: alergia.clinicalStatus,
          system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical-status",
        }
      ]
    },
    type: alergia.type,
    code: {
      coding: [
        {
          code: alergia.code,
          system: "http://snomed.info/sct",
          display: alergia.display
        }
      ]
    }
  }

  return alergiaResource
}
