Instance: PacienteEjemploExtranjero
InstanceOf: OdontoFHIR-PacienteOdontologico-Patient-1
Title: "Paciente extranjero con pasaporte"
Description: "Paciente brasileño que usa pasaporte como documento."

// Documento de identidad: Pasaporte
* identifier.type.coding.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier.type.coding.code = #PAS
* identifier.system = "https://odontofhir.py/id/pas"
* identifier.value = "FD000001"

// Nombre completo (slice: oficial)
* name[oficial].use = #official
* name[oficial].given = "Lucas"
* name[oficial].family = "Silva"

// Segundo apellido como extensión
* name[oficial].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[oficial].family.extension[0].valueString = "Fernández"

// Género y nacimiento
* gender = #male
* birthDate = "1990-06-20"

// Contacto (sliced)
* telecom[phone].system = #phone
* telecom[phone].value = "0989765432"
* telecom[email].system = #email
* telecom[email].value = "lucas@example.com"

// Nacionalidad (extensión)
* extension[+].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad"
* extension[=].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Nacionalidad-OdontoFHIR-1"
* extension[=].valueCodeableConcept.coding[0].code = #076
* extension[=].valueCodeableConcept.coding[0].display = "Brasil"

//Pueblo originario no aplica (usando CodeableConcept)
* extension[+].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-PueblosIndigenas"
* extension[=].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/PueblosIndigenas-OdontoFHIR-1"
* extension[=].valueCodeableConcept.coding[0].code = #0
* extension[=].valueCodeableConcept.coding[0].display = "NO APLICA"

// Dirección (extensión con subextensiones)
* address[0].extension[0].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-DireccionPYPaciente-1"

* address[0].extension[0].extension[0].url = "departamento"
* address[0].extension[0].extension[0].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Departamento-OdontoFHIR-1"
* address[0].extension[0].extension[0].valueCodeableConcept.coding[0].code = #10

* address[0].extension[0].extension[1].url = "ciudad"
* address[0].extension[0].extension[1].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Ciudad-OdontoFHIR-1"
* address[0].extension[0].extension[1].valueCodeableConcept.coding[0].code = #1001

* address[0].extension[0].extension[2].url = "barrio"
* address[0].extension[0].extension[2].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Barrio-OdontoFHIR-1"
* address[0].extension[0].extension[2].valueCodeableConcept.coding[0].code = #1001019
