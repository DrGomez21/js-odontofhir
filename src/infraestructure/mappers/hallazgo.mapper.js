
export const hallazgoMapper = (
  patientId,
  encounterId,
  practitionerId,
  diente,
  hallazgo,
) => {
  const hallazgoResource = {
    resourceType: "Condition",
    meta: {
      profile: [
        "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-HallazgosOdontologicos-Condition-1"
      ]
    },
    bodySite: [
      {
        coding: [diente]
      }
    ],
    code: {
      coding: [hallazgo]
    },
    subject: {
      reference: `Patient/${patientId}`
    },
    encounter: {
      reference: `Encounter/${encounterId}`
    },
    recordedDate: new Date().toISOString(),
    asserter: {
      reference: `Practitioner/${practitionerId}`
    }
  }

  return hallazgoResource
}