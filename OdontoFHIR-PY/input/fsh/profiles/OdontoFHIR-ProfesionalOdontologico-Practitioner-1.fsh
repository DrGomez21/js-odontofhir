Profile: OdontoFHIRProfesionalOdontologicoPractitioner1
Parent: Practitioner

Id: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Perfil del Odontólogo"
Description: "Perfil de un profesional odontológico en Paraguay, incluyendo registro profesional y especialidades."
* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ProfesionalOdontologico-Practitioner-1"

// Must Support
* identifier and identifier.use and identifier.system and identifier.value MS
* name and name.given and name.family and telecom.system and telecom.value MS
* active MS

// Slicing de identificadores: Registro Profesional (obligatorio) y Documento de Identidad (opcional)
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type.coding.code"
* identifier ^slicing.rules = #open
* identifier contains
    registroProfesional 1..1 and
    documentoIdentidad 0..1

// Registro Profesional
* identifier[registroProfesional] ^short = "Identificador del Registro Profesional"
* identifier[registroProfesional] ^definition = "Número de Registro Profesional del odontólogo, obligatorio para el ejercicio de la profesión en Paraguay."
* identifier[registroProfesional].use = #official
* identifier[registroProfesional].type from $VSDocumentoIdentidad (required)
* identifier[registroProfesional].type.coding.code = #RPRO
* identifier[registroProfesional].type.coding.system = $CSDocumentoIdentidad
* identifier[registroProfesional].system = "https://odontofhir.py/api/validar-registro-profesional"
* identifier[registroProfesional].system ^comment = "Endpoint en desarrollo para validar el número de registro profesional automáticamente."
* identifier[registroProfesional].system ^short = "Endpoint para validar el Registro Profesional en Paraguay"
* identifier[registroProfesional].system ^definition = "Define la URL del endpoint en Django para validar automáticamente el Registro Profesional del odontólogo."
* identifier[registroProfesional].value ^short = "Número de Registro Profesional"
* identifier[registroProfesional].value ^definition = "Número de Registro Profesional asignado al odontólogo por la entidad reguladora en Paraguay."

// Documento de Identidad (opcional)
* identifier[documentoIdentidad] ^short = "Cédula de Identidad o Pasaporte"
* identifier[documentoIdentidad] ^definition = "Documento de identidad del odontólogo."
* identifier[documentoIdentidad].use
* identifier[documentoIdentidad].type from $VSDocumentoIdentidad (required)
* identifier[documentoIdentidad].type.coding.system = $CSDocumentoIdentidad
* identifier[documentoIdentidad].value 1..1

// Nombre (slice oficial)
* name ^slicing.discriminator.type = #pattern
* name ^slicing.discriminator.path = "use"
* name ^slicing.rules = #open
* name contains official 1..1

* name[official].use = #official
* name[official] ^short = "Nombre oficial del odontólogo"
* name[official].given 1..1
* name[official].family 1..1
* name[official].family.extension contains $SegundoApellido named segundoApellido 0..1

// Telecom
* telecom ^slicing.discriminator.type = #value
* telecom ^slicing.discriminator.path = "system"
* telecom ^slicing.rules = #open
* telecom contains phone 1..1 and email 0..1

* telecom[phone].system = #phone
* telecom[phone].system MS
* telecom[phone].value 1..1
* telecom[phone].value MS

* telecom[email].system = #email
* telecom[email].system MS
* telecom[email].value 1..1
* telecom[email].value MS

// Estado del odontólogo en el sistema
* active 1..1
* active ^short = "Indica si el odontólogo está activo en el sistema"
* active ^definition = "Si es `true`, el odontólogo está registrado como profesional activo en el sistema."
