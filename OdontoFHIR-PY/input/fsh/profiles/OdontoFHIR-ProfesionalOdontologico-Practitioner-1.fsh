Alias: $ExtRegistroProfesional = https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-RegistroProfesional
Alias: $VSDocumentoIdentidad = https://odontofhir.py/fhir/ValueSet/DocumentoIdentidad-OdontoFHIR-1
Alias: $SegundoApellido = http://hl7.org/fhir/StructureDefinition/humanname-mothers-family

Profile: OdontoFHIRProfesionalOdontologicoPractitioner1
Parent: Practitioner

Id: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Perfil del Odontólogo"
Description: "Perfil de un profesional odontológico en Paraguay, incluyendo registro profesional y documentos de identidad."
* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ProfesionalOdontologico-Practitioner-1"

// Must Support
* identifier and identifier.use and identifier.system and identifier.value and identifier.type MS
* name and name.given and name.family and telecom.system and telecom.value MS
* active MS

// Extensión obligatoria del Registro Profesional
* extension contains $ExtRegistroProfesional named registroProfesional 1..1
* extension[registroProfesional] MS

// Identificadores sin slicing
* identifier 0..* MS
* identifier.type from $VSDocumentoIdentidad (required)
* identifier.use = #official (exactly)
* identifier.value 1..1

// Nombre oficial
* name ^slicing.discriminator.type = #pattern
* name ^slicing.discriminator.path = "use"
* name ^slicing.rules = #open
* name contains official 1..1

* name[official].use = #official
* name[official].given 1..1
* name[official].family 1..1
* name[official].family.extension contains $SegundoApellido named segundoApellido 0..1

// Telecom
* telecom ^slicing.discriminator.type = #value
* telecom ^slicing.discriminator.path = "system"
* telecom ^slicing.rules = #open
* telecom contains phone 1..1 and email 0..1

* telecom[phone].system = #phone
* telecom[phone].value 1..1

* telecom[email].system = #email
* telecom[email].value 1..1

// Estado
* active 1..1
* active ^short = "Indica si el odontólogo está activo en el sistema"
* active ^definition = "Si es `true`, el odontólogo está registrado como profesional activo en el sistema."
