
// Función para obtener el procedimiento odontológico
const getProcedure = (code) => {

}

export const procedureMapper = ({
  patientId,
  practitionerId,
  conditionId,
  diente,
  encounterId,
  procedimiento,
  status = "completed"
}) => {
  const procedure = {
    resourceType: "Procedure",
    meta: {
      profile: [
        "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ProcedimientoOdontologico-Procedure-1"
      ]
    },
    subject: {
      reference: `Patient/${patientId}`
    },
    performer: [
      {
        actor: {
          reference: `Practitioner/${practitionerId}`
        }
      }
    ],
    bodySite: [
      {
        coding: [
          {
            code: diente.code,
            system: "https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1",
            display: diente.display
          }
        ]
      }
    ],
    status: status,
    code: {
      coding: [
        {
          code: procedimiento.code,
          system: "https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1", 
          display: procedimiento.display
        }
      ]
    },
    encounter: {
      reference: `Encounter/${encounterId}`
    },
    performedDateTime: new Date().toISOString()
  };

  if (conditionId !== undefined) {
    procedure.reasonReference = [
      {
        reference: `Condition/${conditionId}`
      }
    ];
  }

  return procedure;
};