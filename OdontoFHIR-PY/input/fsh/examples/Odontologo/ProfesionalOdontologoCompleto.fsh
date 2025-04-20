Instance: ProfesionalOdontologoCompleto
InstanceOf: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Odontólogo con Registro Profesional y Cédula"
Description: "Profesional odontológico registrado con documento de identidad."

* active = true

// Registro Profesional (obligatorio)
* identifier[registroProfesional].use = #official
* identifier[registroProfesional].type.coding.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier[registroProfesional].type.coding.code = #RPRO
* identifier[registroProfesional].system = "https://odontofhir.py/api/validar-registro-profesional"
* identifier[registroProfesional].value = "OD-2025-001"

// Documento de Identidad (opcional)
* identifier[documentoIdentidad].use = #official
* identifier[documentoIdentidad].type.coding.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier[documentoIdentidad].type.coding.code = #CI
* identifier[documentoIdentidad].value = "1234567"

// Nombre (slice: oficial)
* name[official].use = #official
* name[official].given = "María"
* name[official].family = "Ortiz"

// Segundo apellido como extensión
* name[official].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[official].family.extension[0].valueString = "Giménez"

// Contacto
* telecom[phone].system = #phone
* telecom[phone].value = "0981223344"
* telecom[email].system = #email
* telecom[email].value = "maria.ortiz@ejemplo.com"
