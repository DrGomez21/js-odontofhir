Instance: PacienteJuanEjemploEscenario1
InstanceOf: OdontoFHIR-PacienteOdontologico-Patient-1
Title: "Paciente paraguayo de prueba"
Description: "Paciente utilizando en el escenario del caso de uso numero 1."

// Identificador: Cédula de Identidad
* identifier.type.coding.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier.type.coding.code = #CI
* identifier.system = "https://odontofhir.py/id/ci"
* identifier.value = "7077077"

// Nombre (slice oficial)
* name[oficial].use = #official
* name[oficial].given = "Juan"
* name[oficial].family = "Prueba"
* name[oficial].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[oficial].family.extension[0].valueString = "OdontoFHIR"

// Género y fecha de nacimiento
* gender = #male
* birthDate = "2003-06-14"

// Contacto
* telecom[phone].system = #phone
* telecom[phone].value = "0991123456"
* telecom[email].system = #email
* telecom[email].value = "juan@example.com"

// Nacionalidad (valueCodeableConcept)
* extension[+].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad"
* extension[=].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Nacionalidad-OdontoFHIR-1"
* extension[=].valueCodeableConcept.coding[0].code = #600
* extension[=].valueCodeableConcept.coding[0].display = "Paraguay"

// Pueblo Indígena (valueCodeableConcept)
* extension[+].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-PueblosIndigenas"
* extension[=].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/PueblosIndigenas-OdontoFHIR-1"
* extension[=].valueCodeableConcept.coding[0].code = #0
* extension[=].valueCodeableConcept.coding[0].display = "NO APLICA"

// Dirección (extensión compuesta)
* address[0].extension[0].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-DireccionPYPaciente-1"

* address[0].extension[0].extension[0].url = "departamento"
* address[0].extension[0].extension[0].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Departamento-OdontoFHIR-1"
* address[0].extension[0].extension[0].valueCodeableConcept.coding[0].code = #11

* address[0].extension[0].extension[1].url = "ciudad"
* address[0].extension[0].extension[1].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Ciudad-OdontoFHIR-1"
* address[0].extension[0].extension[1].valueCodeableConcept.coding[0].code = #1102

* address[0].extension[0].extension[2].url = "barrio"
* address[0].extension[0].extension[2].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Barrio-OdontoFHIR-1"
* address[0].extension[0].extension[2].valueCodeableConcept.coding[0].code = #1102037

* address[0].extension[0].extension[3].url = "numeroCasa"
* address[0].extension[0].extension[3].valueInteger = 444
