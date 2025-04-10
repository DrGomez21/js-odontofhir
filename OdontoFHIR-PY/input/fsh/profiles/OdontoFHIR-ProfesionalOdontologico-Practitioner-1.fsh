Profile: OdontoFHIRProfesionalOdontologicoPractitioner1
Parent: Practitioner

Id: OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Title: "Perfil del Odontólogo"
Description: "Perfil de un profesional odontológico en Paraguay, incluyendo registro profesional y especialidades."
* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ProfesionalOdontologico-Practitioner-1"

// Must Support
// Must Support
* identifier and identifier.use and identifier.system and identifier.value MS
* name and name.given and name.family and telecom.system and telecom.value MS
* active MS


// Identificadores: Registro Profesional (obligatorio) y Documento de Identidad (opcional)
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
* identifier[registroProfesional].type.coding.system = $CSDocumentoIdentidad
* identifier[registroProfesional].type.coding.code = #RPRO
* identifier[registroProfesional].system
* identifier[registroProfesional].system = "https://odontofhir.py/api/validar-registro-profesional"
* identifier[registroProfesional].system ^comment = "Endpoint en desarrollo para validar el número de registro profesional automáticamente."
* identifier[registroProfesional].system ^short = "Endpoint para validar el Registro Profesional en Paraguay"
* identifier[registroProfesional].system ^definition = "Define la URL del endpoint en Django para validar automáticamente el Registro Profesional del odontólogo."
* identifier[registroProfesional].value
* identifier[registroProfesional].value ^short = "Número de Registro Profesional"
* identifier[registroProfesional].value ^definition = "Número de Registro Profesional asignado al odontólogo por la entidad reguladora en Paraguay."

// Documento de Identidad (Opcional)
* identifier[documentoIdentidad] ^short = "Cédula de Identidad o Pasaporte"
* identifier[documentoIdentidad] ^definition = "Documento de identidad del odontólogo."
* identifier[documentoIdentidad].use
* identifier[documentoIdentidad].type from $VSDocumentoIdentidad (required)
* identifier[documentoIdentidad].value 1..1

// Nombre
* name ^slicing.discriminator.type = #pattern
* name ^slicing.discriminator.path = "use"
* name ^slicing.rules = #open
* name contains official 1..1

* name[official].use = #official
* name[official] ^short = "Nombre oficial del odontólogo"
* name[official].given 1..1
* name[official].family 1..1
* name[official].family.extension contains $SegundoApellido named segundoApellido 0..1

// Contacto
* telecom 1..*
* telecom.system 1..1
* telecom.value 1..1
* telecom.system from http://hl7.org/fhir/ValueSet/contact-point-system (required)

// Estado del odontólogo en el sistema
* active 1..1
* active ^short = "Indica si el odontólogo está activo en el sistema"
* active ^definition = "Si es `true`, el odontólogo está registrado como profesional activo en el sistema."
