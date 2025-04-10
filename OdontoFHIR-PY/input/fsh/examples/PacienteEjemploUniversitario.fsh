Instance: PacienteEjemploUniversitario
InstanceOf: OdontoFHIR-PacienteOdontologico-Patient-1
Title: "Paciente paraguayo universitario con pueblo indígena"
Description: "Paciente joven con CI y pertenencia a un pueblo indígena."

// Identificador: Cédula de Identidad
* identifier.type.coding.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier.type.coding.code = #CI
// Aún no se implementa un NamingSystem formal para este system. 
// Se utiliza este URI experimentalmente como identificador del namespace 
// para Cédulas de Identidad en Paraguay.
* identifier.system = "https://odontofhir.py/id/ci"
* identifier.value = "6000001"

// Nombre (slice oficial)
* name[oficial].use = #official
* name[oficial].given = "Carlos"
* name[oficial].family = "González"
* name[oficial].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[oficial].family.extension[0].valueString = "Peralta"

// Género y fecha de nacimiento
* gender = #male
* birthDate = "2003-01-15"

// Contacto (usando slices nombrados)
* telecom[phone].system = #phone
* telecom[phone].value = "0981123456"
* telecom[email].system = #email
* telecom[email].value = "carlos@example.com"

// Extensiones: Nacionalidad y Pueblo Indígena
* extension[+].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad"
* extension[=].valueCode = #PY
* extension[+].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-PuebloIndigena"
* extension[=].valueCode = #45

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
