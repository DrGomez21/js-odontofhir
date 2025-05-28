


export const encounterMapper = (
  encounter,
  patient,
  practitioner,
) => {
  /*Puse la constante aca adentro*/
  const { data: practitionerStore } = usePractitionerStore((state) => state.practitioner);
  if (!encounter.end) {
    const encounterResource = {
      resourceType: 'Encounter',
      meta: {
        profile: [
          "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"
        ]
      },
      subject: {
        reference: `Patient/${patient}`
      },
      participant: [
        {
          individual: {
            reference: `Practitioner/${practitionerStore.resource.id}`
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
      diagnosis: [],
      reasonReference: [],
    }
    
    return encounterResource
  }

  const encounterResource = {
    resourceType: 'Encounter',
    meta: {
      profile: [
        "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"
      ]
    },
    subject: {
      reference: `Patient/${patient}`
    },
    participant: [
      {
        individual: {
          reference: `Practitioner/${practitioner}`
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
    diagnosis: [],
    reasonReference: [],
  }

  return encounterResource
}