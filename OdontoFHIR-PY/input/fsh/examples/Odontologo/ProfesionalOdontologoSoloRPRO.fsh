Instance: ProfesionalOdontologoSoloRPRO
InstanceOf: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Odontólogo solo con RPRO"
Description: "Profesional odontológico registrado sin documento de identidad."

* active = true

// Extensión de Registro Profesional
* extension[registroProfesional].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-RegistroProfesional"
* extension[registroProfesional].valueIdentifier.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].code = #RPRO
* extension[registroProfesional].valueIdentifier.value = "20042025"

// Identificador RPRO
* identifier[0].use = #official
* identifier[0].type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier[0].type.coding[0].code = #RPRO
* identifier[0].system = "https://odontofhir.py/api/validar-registro-profesional"
* identifier[0].value = "20042025"

// Nombre
* name[official].use = #official
* name[official].given = "Silvia"
* name[official].family = "Cuevas"
* name[official].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[official].family.extension[0].valueString = "Achar"

// Contacto
* telecom[phone].system = #phone
* telecom[phone].value = "0977888999"
* telecom[email].system = #email
* telecom[email].value = "silvicuevas@salud.gov.py"
