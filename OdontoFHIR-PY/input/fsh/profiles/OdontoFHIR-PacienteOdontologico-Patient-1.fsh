Alias: $SegundoApellido = http://hl7.org/fhir/StructureDefinition/humanname-mothers-family
Alias: $VSDocumentoIdentidad = https://odontofhir.py/fhir/ValueSet/DocumentoIdentidad-OdontoFHIR-1
Alias: $VSNationality = https://odontofhir.py/fhir/ValueSet/Nacionalidad-OdontoFHIR-1
Alias: $VSPueblosIndigenas = https://odontofhir.py/fhir/ValueSet/PueblosIndigenas-OdontoFHIR-1

Profile: OdontoFHIRPacienteOdontologicoPatient1  
Parent: Patient

Id : OdontoFHIR-PacienteOdontologico-Patient-1
Title : "Perfil de Paciente Odontologico"
Description : "Un perfil de paciente, adaptado a las necesidades odontológicas de Paraguay."
* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-PacienteOdontologico-Patient-1"

// MustSupport
* identifier and identifier.type and identifier.system and identifier.value MS
* name and name[official] and name[official].given and name[official].family MS
* gender and birthDate and telecom.system and telecom.value MS
* extension[nacionalidad] and extension[puebloIndigena] MS

// Nacionalidad y pueblo indígena
* extension contains
    VSNationality named nacionalidad 0..1 and
    VSPueblosIndigenas named puebloIndigena 0..1

* extension[nacionalidad].value[x] only CodeableConcept
* extension[nacionalidad].valueCodeableConcept from $VSNationality (extensible)

* extension[puebloIndigena].value[x] only CodeableConcept
* extension[puebloIndigena].valueCodeableConcept from $VSPueblosIndigenas (extensible)

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
* name contains
    official 1..1 and
    givenName 1..1 and
    familyName 1..1

* name[official].use = #official
* name[official] ^short = "Nombre oficial del paciente"
* name[official].given 1..1
* name[official].family 1..1
* name[official].family.extension contains $SegundoApellido named segundoApellido 0..1

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
* telecom 1..*
* telecom.system 1..1
* telecom.value 1..1
* telecom.system from http://hl7.org/fhir/ValueSet/contact-point-system (required)
* telecom where (system = 'phone') 1..*
* telecom where (system = 'email') 0..1

// Dirección
* address.extension contains ExtensionOdontoFHIRDireccionPYPaciente1 named direccion 1..1
