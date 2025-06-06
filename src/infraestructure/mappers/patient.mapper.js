// Acá podremos mapear los datos de la base de datos a los datos que necesita el front.


// Se mapean los datos del formulario a los datos que necesita el backend para crear un paciente en FHIR.

// Acá se considera el ingreso con cédula.
export const parseFHIRResource = (patient) => {
  const patientResource = {
    resourceType: 'Patient',
    meta: {
      profile: [
        "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-PacienteOdontologico-Patient-1"
      ]
    },
    identifier: [
      {
        type: {
          coding: [
            {
              system: "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1",
              code: "CI"
            }
          ]
        },
        system: "https://odontofhir.py/id/ci",
        value: patient.identificacion
      }
    ],
    name: [
      {
        use: 'official',
        given: [
          patient.given
        ],
        family: patient.family,
        _family: {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family",
              valueString: "Segundo Apellido"
            }
          ]
        }
      }
    ],
    gender: patient.gender,
    birthDate: patient.birthDate,
    telecom: [
      {
        system: 'phone',
        value: patient.phoneValue,
      },
      {
        system: 'email',
        value: patient.emailValue
      }
    ],
    extension: [
      {
        valueCodeableConcept: {
          coding: [
            {
              system: "https://odontofhir.py/fhir/CodeSystem/Nacionalidad-OdontoFHIR-1",
              code: patient.nacionalidad,
              display: "Paraguay"
            }
          ]
        },
        url: "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad"
      },
    ],
    address: [
      {
        extension: [
          {
            extension: [
              {
                valueCodeableConcept: {
                  coding: [
                    {
                      system: "https://odontofhir.py/fhir/CodeSystem/Departamento-OdontoFHIR-1",
                      code: patient.departamento
                    }
                  ]
                },
                url: "departamento"
              },
              {
                valueCodeableConcept: {
                  coding: [
                    {
                      system: "https://odontofhir.py/fhir/CodeSystem/Ciudad-OdontoFHIR-1",
                      code: patient.ciudad
                    }
                  ]
                },
                url: "ciudad"
              },
              {
                valueCodeableConcept: {
                  coding: [
                    {
                      system: "https://odontofhir.py/fhir/CodeSystem/Barrio-OdontoFHIR-1",
                      code: patient.barrio
                    }
                  ]
                },
                url: "barrio"
              }
            ],
            url: "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-DireccionPYPaciente-1"
          }
        ]
      }
    ]
  }

  return patientResource
}