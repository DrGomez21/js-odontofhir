Alias: $SegundoApellido = http://hl7.org/fhir/StructureDefinition/humanname-mothers-family
Alias: $VSDocumentoIdentidad = https://odontofhir.py/fhir/ValueSet/DocumentoIdentidad-OdontoFHIR-1
Alias: $ExtNacionalidad = https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad
Alias: $ExtPuebloIndigena = https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-PuebloIndigena


Profile: OdontoFHIRPacienteOdontologicoPatient1  
Parent: Patient

Id : OdontoFHIR-PacienteOdontologico-Patient-1
Title : "Perfil de Paciente Odontologico"
Description : "Un perfil de paciente, adaptado a las necesidades odontológicas de Paraguay."
* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-PacienteOdontologico-Patient-1"

// MustSupport
* identifier and identifier.type and identifier.system and identifier.value MS
* name MS
* gender and birthDate and telecom.system and telecom.value MS


// Nacionalidad y pueblo indígena
* extension contains
    $ExtNacionalidad named nacionalidad 0..1 and
    $ExtPuebloIndigena named puebloIndigena 0..1

// Identificador con CI o Pasaporte
* identifier 1..1
* identifier.type 1..1
* identifier.type from $VSDocumentoIdentidad (required)
* identifier.system 1..1
* identifier.value 1..1
* identifier.type ^short = "Tipo de documento de identificación"
* identifier.type ^definition = "Cédula de Identidad, Pasaporte, No tiene, No se conoce."
* identifier.value ^short = "Número de identificación"
* identifier.value ^definition = "Número único del documento de identidad."

// Nombre
* name ^slicing.discriminator.type = #pattern
* name ^slicing.discriminator.path = "use"
* name ^slicing.rules = #open
* name contains oficial 1..1

* name[oficial].use = #official
* name[oficial].given 1..1
* name[oficial].family 1..1
* name[oficial].family.extension contains $SegundoApellido named segundoApellido 0..1

// Género
* gender 1..1
* gender from http://hl7.org/fhir/ValueSet/administrative-gender (required)
* gender ^short = "Género del paciente"
* gender ^definition = "Identifica el género administrativo del paciente, utilizado en registros clínicos."

// Fecha de nacimiento
* birthDate 1..1
* birthDate ^short = "Fecha de nacimiento del paciente"
* birthDate ^definition = "Fecha exacta en la que nació el paciente, utilizada para cálculos de edad y seguimiento clínico."

// Telecom
* telecom ^slicing.discriminator.type = #value
* telecom ^slicing.discriminator.path = "system"
* telecom ^slicing.rules = #open

* telecom contains phone 1..* and email 0..1

* telecom[phone].system = #phone
* telecom[phone].system MS
* telecom[phone].value 1..1
* telecom[phone].value MS

* telecom[email].system = #email
* telecom[email].system MS
* telecom[email].value 1..1
* telecom[email].value MS

// Dirección
* address.extension contains ExtensionOdontoFHIRDireccionPYPaciente1 named direccion 1..1
