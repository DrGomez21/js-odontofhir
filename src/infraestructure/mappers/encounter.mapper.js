export const encounterMapper = (
  encounter,
  patientId,
  practitionerId
) => {
  if (!encounter.end) {
    return {
      resourceType: 'Encounter',
      meta: {
        profile: [
          "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"
        ]
      },
      subject: {
        reference: `Patient/${patientId}`
      },
      participant: [
        {
          individual: {
            reference: `Practitioner/${practitionerId}`
          }
        }
      ],
      period: {
        start: encounter.start
      },
      status: encounter.status,
      class: {
        code: encounter.classCode,
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
        display: encounter.classDisplay
      },
      reasonReference: [],
    };
  }

  // con `end`
  return {
    resourceType: 'Encounter',
    meta: {
      profile: [
        "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"
      ]
    },
    subject: {
      reference: `Patient/${patientId}`
    },
    participant: [
      {
        individual: {
          reference: `Practitioner/${practitionerId}`
        }
      }
    ],
    period: {
      start: encounter.start,
      end: encounter.end,
    },
    status: encounter.status,
    class: {
      code: encounter.classCode,
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
      display: encounter.classDisplay
    },
    reasonReference: [],
  };
};
