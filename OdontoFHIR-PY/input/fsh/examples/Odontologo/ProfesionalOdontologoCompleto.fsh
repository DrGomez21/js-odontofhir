Instance: ProfesionalOdontologoCompleto
InstanceOf: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Odontólogo con Registro Profesional y Cédula"
Description: "Profesional odontológico registrado con documento de identidad."

* active = true

// Extensión RPRO
* extension[registroProfesional].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-RegistroProfesional"
* extension[registroProfesional].valueIdentifier.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].code = #RPRO
* extension[registroProfesional].valueIdentifier.value = "12345"

// Documento CI
* identifier[0].use = #official
* identifier[0].type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier[0].type.coding[0].code = #CI
* identifier[0].type.coding[0].userSelected = true
* identifier[0].value = "1234567"

// Nombre
* name[official].use = #official
* name[official].given = "María"
* name[official].family = "Ortiz"
* name[official].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[official].family.extension[0].valueString = "Giménez"

// Contacto
* telecom[phone].system = #phone
* telecom[phone].value = "0981223344"
* telecom[email].system = #email
* telecom[email].value = "maria.ortiz@ejemplo.com"