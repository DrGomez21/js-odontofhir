Instance: ProfesionalOdontologoSoloRPRO
InstanceOf: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Odontólogo solo con RPRO"
Description: "Profesional odontológico registrado sin documento de identidad."

* active = true

// Registro Profesional
* identifier[registroProfesional].use = #official
* identifier[registroProfesional].type.coding.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier[registroProfesional].type.coding.code = #RPRO
* identifier[registroProfesional].system = "https://odontofhir.py/api/validar-registro-profesional"
* identifier[registroProfesional].value = "OD-2025-002"

// Nombre
* name[official].use = #official
* name[official].given = "Carlos"
* name[official].family = "Ramírez"
* name[official].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[official].family.extension[0].valueString = "Benítez"

// Contacto
* telecom[phone].system = #phone
* telecom[phone].value = "0977888999"
* telecom[email].system = #email
* telecom[email].value = "carlos.ramirez@salud.gov.py"