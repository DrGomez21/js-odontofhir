Instance: ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1ASDd
InstanceOf: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Odontólogo con Registro Profesional y Cédula"
Description: "Profesional odontológico registrado con documento de identidad."

* active = true

// Extensión RPRO
* extension[registroProfesional].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-RegistroProfesional"
* extension[registroProfesional].valueIdentifier.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].code = #RPRO
* extension[registroProfesional].valueIdentifier.value = "126489"

// Documento CI
* identifier[0].use = #official
* identifier[0].type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier[0].type.coding[0].code = #CI
* identifier[0].type.coding[0].userSelected = true
* identifier[0].value = "4356447"

// Nombre
* name[official].use = #official
* name[official].given = "Julia"
* name[official].family = "Odonto"
* name[official].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[official].family.extension[0].valueString = "Prueba"

// Contacto
* telecom[phone].system = #phone
* telecom[phone].value = "0981223344"
* telecom[email].system = #email
* telecom[email].value = "odonto.julio@clinicaA.com"