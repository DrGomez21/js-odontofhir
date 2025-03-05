Alias: $SegundoApellido = http://hl7.org/fhir/StructureDefinition/humanname-mothers-family

//Declaracion
Profile: PacienteOdontologico

//Keywords
Parent: Patient
Id: paciente-odontologico
Title: "Perfil de Paciente Odontologico"
Description: "Un perfil de paciente, adaptado a las necesidades odontológicas de Paraguay."

//Rules
* identifier.type from PY-DocumentoIdentidad (required)
* identifier.type ^short = "Tipo de documento de identificación"
* identifier.type ^definition = "Especifica el tipo de documento utilizado para identificar al paciente (CI o Pasaporte)."
* identifier where(type = "Pasaporte") obeys si-no-es-paraguayo
Invariant: si-no-es-paraguayo
Description: "Usar numero de Pasaporte solo es válido si la nacionalidad del paciente no es de Paraguay."
Expression: "patient.address.country.empty() or patient.address.country != 'PRY'"

* name 1..* MS
* name ^short = "Nombre completo del paciente"
* name ^definition = "Representa el nombre del paciente, incluyendo nombre y apellido."
* name.family.extension contains $SegundoApellido named segundoApellido 0..1
* name.family.extension[segundoApellido] ^short = "Segundo Apellido"
* name.family.extension[segundoApellido] ^definition = "Extensión estandarizada en FHIR para representar el apellido materno o segundo apellido del paciente."

* birthDate 1..1
* birthDate ^short = "Fecha de nacimiento del paciente"
* birthDate ^definition = "Fecha exacta en la que nació el paciente, utilizada para cálculos de edad y seguimiento clínico."

* contact.extension contains TutorLegal named tutorLegal 0..1
* contact.identifier from PY-DocumentoIdentidad (required)
* contact.extension[tutorLegal] ^short = "Tutor Legal"
* contact.extension[tutorLegal] ^definition = "Tutor legal del paciente en caso de ser menor de edad."
* obeys necesita-tutor
Invariant: necesita-tutor
Description: "Si el paciente es menor de 18 años, debe tener un tutor legal."
Expression: "(today() - birthDate).years < 18 implies contact.extension.exists(tutorLegal)"


* gender from http://hl7.org/fhir/ValueSet/administrative-gender (required)
* gender ^short = "Género del paciente"
* gender ^definition = "Identifica el género administrativo del paciente, utilizado en registros clínicos."

* maritalStatus from http://hl7.org/fhir/ValueSet/marital-status (extensible)
* maritalStatus ^short = "Estado civil del paciente"
* maritalStatus ^definition = "Indica el estado civil del paciente según registros oficiales."
