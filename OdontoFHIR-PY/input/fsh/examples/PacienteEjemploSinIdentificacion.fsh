Instance: PacienteEjemploSinIdentificacion
InstanceOf: OdontoFHIR-PacienteOdontologico-Patient-1
Title: "Paciente sin identificación"
Description: "Paciente vulnerable sin documento identificatorio conocido."

// Tipo de documento: desconocido
* identifier.type.coding.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier.type.coding.code = #UNK
* identifier.system = "https://odontofhir.py/id/desconocido"
* identifier.value = "NO-IDENTIFICADO"

// Nombre (slice oficial)
* name[oficial].use = #official
* name[oficial].given = "Ana"
* name[oficial].family = "Rojas"
* name[oficial].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[oficial].family.extension[0].valueString = "Ramírez"

// Género y nacimiento
* gender = #female
* birthDate = "1985-03-01"

// Contacto (sliced)
* telecom[phone].system = #phone
* telecom[phone].value = "0999555123"
* telecom[email].system = #email
* telecom[email].value = "ana@example.com"

// Nacionalidad
* extension[+].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad"
* extension[=].valueCode = #PY

// Dirección
* address[0].extension[0].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-DireccionPYPaciente-1"

* address[0].extension[0].extension[0].url = "departamento"
* address[0].extension[0].extension[0].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Departamento-OdontoFHIR-1"
* address[0].extension[0].extension[0].valueCodeableConcept.coding[0].code = #99

* address[0].extension[0].extension[1].url = "ciudad"
* address[0].extension[0].extension[1].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Ciudad-OdontoFHIR-1"
* address[0].extension[0].extension[1].valueCodeableConcept.coding[0].code = #9999

* address[0].extension[0].extension[2].url = "barrio"
* address[0].extension[0].extension[2].valueCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/Barrio-OdontoFHIR-1"
* address[0].extension[0].extension[2].valueCodeableConcept.coding[0].code = #9999999
