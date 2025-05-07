Instance: ProfesionalOdontologoDrLeandroEscenario1
InstanceOf: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Escenario 1: Doctor Leandro"
Description: "Profesional odontológico que atiende a Juan en su adolescencia."

* active = true

* text.status = #generated
* text.div = """<div xmlns="http://www.w3.org/1999/xhtml"><p>Doctor: Leandro Pérez</p></div>"""


// Extensión RPRO
* extension[registroProfesional].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-RegistroProfesional"
* extension[registroProfesional].valueIdentifier.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].code = #RPRO
* extension[registroProfesional].valueIdentifier.value = "152301"

// Documento CI
* identifier[0].use = #official
* identifier[0].type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier[0].type.coding[0].code = #CI
* identifier[0].type.coding[0].userSelected = true
* identifier[0].value = "3789902"

// Nombre
* name[official].use = #official
* name[official].given = "Leandro"
* name[official].family = "Pérez"
* name[official].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[official].family.extension[0].valueString = "Ortiz"

// Contacto
* telecom[phone].system = #phone
* telecom[phone].value = "0971445566"
* telecom[email].system = #email
* telecom[email].value = "leandro.perez@sonrisaintegral.com"
