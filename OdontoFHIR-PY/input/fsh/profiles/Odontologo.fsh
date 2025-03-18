Alias: $VSPY-DocumentoIdentidad = https://odontofhir.py/fhir/ValueSet/VSPY-DocumentoIdentidad
Alias: $VSPY-OdontologiaEspecialidades = https://odontofhir.py/fhir/ValueSet/VSPY-OdontologiaEspecialidades
Alias: $CSPY-DocumentoIdentidad = https://odontofhir.py/fhir/CodeSystem/CSPY-DocumentoIdentidad
Alias: $dental-category = http://hl7.org/fhir/us/dental-data-exchange/CodeSystem/dental-category

Profile: Odontologo
Parent: Practitioner

// Metadatos del perfil
Id : Odontologo
Title : "Perfil del Odontólogo"
Description : "Perfil de un profesional odontológico en Paraguay, incluyendo registro profesional y especialidades."
* ^url = "https://odontofhir.py/fhir/StructureDefinition/Odontologo"

// Identificadores: Registro Profesional (obligatorio) y Documento de Identidad (opcional)
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type.coding.code"
* identifier ^slicing.rules = #open
* identifier contains
    registroProfesional 1..1 MS and
    documentoIdentidad 0..1 MS

// * Registro Profesional (Obligatorio)
* identifier[registroProfesional] ^short = "Identificador del Registro Profesional"
* identifier[registroProfesional] ^definition = "Número de Registro Profesional del odontólogo, obligatorio para el ejercicio de la profesión en Paraguay."
* identifier[registroProfesional].use MS
* identifier[registroProfesional].type.coding.system = $CSPY-DocumentoIdentidad
* identifier[registroProfesional].type.coding.code = #RPRO
* identifier[registroProfesional].system MS
* identifier[registroProfesional].system = "https://odontofhir.py/api/validar-registro-profesional"
* identifier[registroProfesional].system ^short = "Endpoint para validar el Registro Profesional en Paraguay"
* identifier[registroProfesional].system ^definition = "Define la URL del endpoint en Django para validar automáticamente el Registro Profesional del odontólogo."
* identifier[registroProfesional].value MS
* identifier[registroProfesional].value ^short = "Número de Registro Profesional"
* identifier[registroProfesional].value ^definition = "Número de Registro Profesional asignado al odontólogo por la entidad reguladora en Paraguay."

// Documento de Identidad (Opcional)
* identifier[documentoIdentidad] ^short = "Cédula de Identidad o Pasaporte"
* identifier[documentoIdentidad] ^definition = "Documento de identidad del odontólogo."
* identifier[documentoIdentidad].use MS
* identifier[documentoIdentidad].type from $VSPY-DocumentoIdentidad (required)
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

// Especialidades Odontológicas. No es necesario, ya verificamos si es un odontologo con RPRO.

// **Estado del odontólogo en el sistema**
* active 1..1 MS
* active ^short = "Indica si el odontólogo está activo en el sistema"
* active ^definition = "Si es `true`, el odontólogo está registrado como profesional activo en el sistema."

//Colocar la categoria dental
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains dental 1..1 MS
* category[dental] = $dental-category#dental "Dental" (exactly)
