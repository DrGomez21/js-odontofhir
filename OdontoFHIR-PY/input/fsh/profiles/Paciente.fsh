Alias: $SegundoApellido = http://hl7.org/fhir/StructureDefinition/humanname-mothers-family
Alias: $VSPY-DocumentoIdentidad = https://odontofhir.py/fhir/ValueSet/VSPY-DocumentoIdentidad
Alias: $VSPY-Nationality = https://odontofhir.py/fhir/ValueSet/VSPY-Nationality
Alias: $VSPY-PueblosIndigenas = https://odontofhir.py/fhir/ValueSet/VSPY-PueblosIndigenas
Alias: $VSPY-TipoContactoConTutor = http://hl7.org/fhir/ValueSet/contact-point-system

//Declaracion
Profile: PacienteOdontologico
Parent: Patient

//Keywords
Id : PacienteOdontologico
Title : "Perfil de Paciente Odontologico"
Description : "Un perfil de paciente, adaptado a las necesidades odontológicas de Paraguay."
* ^url = "https://odontofhir.py/fhir/StructureDefinition/PacienteOdontologico"

//Rules

//Slice para Nacionalidad y si es de algun pueblo originario

* extension contains
    VSPY-Nationality named nacionalidad 0..1 MS and
    VSPY-PueblosIndigenas named puebloIndigena 0..1 MS

* extension[nacionalidad].value[x] only CodeableConcept
* extension[nacionalidad].valueCodeableConcept from $VSPY-Nationality (extensible)

* extension[puebloIndigena].value[x] only CodeableConcept
* extension[puebloIndigena].valueCodeableConcept from $VSPY-PueblosIndigenas (extensible)

//Identificador con CI o Pasaporte

* identifier 1..1 MS
* identifier.type 1..1 MS $VSPY-DocumentoIdentidad (required)
* identifier.system 1..1 MS
* identifier.value 1..1 MS
* identifier.type ^short = "Tipo de documento de identificación"
* identifier.type ^definition = "Cédula de Identidad, Pasaporte, No tiene, No se conoce."
* identifier.value ^short = "Número de identificación"
* identifier.value ^definition = "Número único del documento de identidad."

//Nombre

* name ^slicing.discriminator.type = #pattern
* name ^slicing.discriminator.path = "use"
* name ^slicing.rules = #open
* name contains
    official 1..1 MS and
    givenName 1..1 MS and
    familyName 1..1 MS

* name[official].use = #official
* name[official] ^short = "Nombre oficial del paciente"

* name[official].given 1..1
* name[official].family 1..1
* name[official].family.extension contains $SegundoApellido named segundoApellido 0..1

// Género del paciente

* gender 1..1 MS from http://hl7.org/fhir/ValueSet/administrative-gender (required)
* gender ^short = "Género del paciente"
* gender ^definition = "Identifica el género administrativo del paciente, utilizado en registros clínicos."

// Fecha de nacimiento
* birthDate 1..1 MS
* birthDate ^short = "Fecha de nacimiento del paciente"
* birthDate ^definition = "Fecha exacta en la que nació el paciente, utilizada para cálculos de edad y seguimiento clínico."

//Telecom

* telecom 1..*
* telecom.system 1..1 MS
* telecom.value 1..1 MS
* telecom.system from http://hl7.org/fhir/ValueSet/contact-point-system (required)
* telecom where(system = 'phone') 1..*
* telecom where(system = 'email') 0..1

//Address

* address.extension contains PY-Address named direccion 1..1