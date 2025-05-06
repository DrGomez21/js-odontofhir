Instance: ProfesionalOdontologoDraErikaEjemploEscenario1
InstanceOf: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Odontóloga Extranjera con Registro Profesional"
Description: "Profesional odontológica que atiende a Juan durante su estadía en el extranjero."


* text.status = #generated
* text.div = """<div xmlns="http://www.w3.org/1999/xhtml"><p>Doctora: Erika Schmidt</p></div>"""

* active = true

// Extensión RPRO
* extension[registroProfesional].url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-RegistroProfesional"
* extension[registroProfesional].valueIdentifier.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* extension[registroProfesional].valueIdentifier.type.coding[0].code = #RPRO
* extension[registroProfesional].valueIdentifier.value = "998844"

// Documento PAS
* identifier[0].use = #official
* identifier[0].type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* identifier[0].type.coding[0].code = #PAS
* identifier[0].type.coding[0].userSelected = true
* identifier[0].value = "FD000002"

// Nombre
* name[official].use = #official
* name[official].given = "Erika"
* name[official].family = "Schmidt"
* name[official].family.extension[0].url = "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family"
* name[official].family.extension[0].valueString = "Pereira"

// Contacto
* telecom[phone].system = #phone
* telecom[phone].value = "+49 173 9988123"
* telecom[email].system = #email
* telecom[email].value = "erika.lopez@globalsmile.org"
