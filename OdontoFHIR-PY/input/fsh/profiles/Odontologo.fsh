Alias: $VSPY-DocumentoIdentidad = https://odontofhir.py/fhir/ValueSet/VSPY-DocumentoIdentidad
Alias: $VSPY-OdontologiaEspecialidades = https://odontofhir.py/fhir/ValueSet/VSPY-OdontologiaEspecialidades

Profile: Odontologo
Parent: Practitioner
* ^url = "https://odontofhir.py/fhir/StructureDefinition/Odontologo"
Id: odontologo
Title: "Perfil del Odontólogo"
Description: "Perfil de un profesional odontológico en Paraguay, incluyendo registro profesional y especialidades."

// Identificadores: Registro Profesional (obligatorio) y Documento de Identidad (opcional)
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier contains
    registroProfesional 1..1 MS and
    documentoIdentidad 0..1 MS

* identifier[registroProfesional].type 1..1 MS
* identifier[registroProfesional].type ^short = "Registro Profesional"
* identifier[registroProfesional].value 1..1 MS
* identifier[registroProfesional].system 1..1 MS
* identifier[registroProfesional].system = "https://odontofhir.py/fhir/CodeSystem/RegistroProfesional"

* identifier[documentoIdentidad].type 1..1 MS from $VSPY-DocumentoIdentidad
* identifier[documentoIdentidad].value 1..1 MS

// Nombre
* name ^slicing.discriminator.type = #pattern
* name ^slicing.discriminator.path = "use"
* name ^slicing.rules = #open
* name contains
    official 1..1 MS and
    givenName 1..1 MS and
    familyName 1..1 MS

* name[official].use = #official
* name[official] ^short = "Nombre oficial del odontólogo"
* name[official].given 1..1
* name[official].family 1..1
* name[official].family.extension contains $SegundoApellido named segundoApellido 0..1

// Contacto
* telecom 1..*
* telecom.system 1..1 MS
* telecom.value 1..1 MS
* telecom.system from http://hl7.org/fhir/ValueSet/contact-point-system (required)

// Especialidades Odontológicas
* qualification 1..* MS
* qualification.code from $VSPY-OdontologiaEspecialidades (extensible)
* qualification.identifier 1..1 MS
* qualification.identifier.system 1..1 MS
* qualification.identifier.value 1..1 MS

// Estado del odontólogo en el sistema
* active 1..1 MS
* active ^short = "Indica si el odontólogo está activo en el sistema"
* active ^definition = "Si es `true`, el odontólogo está registrado como profesional activo en el sistema."
