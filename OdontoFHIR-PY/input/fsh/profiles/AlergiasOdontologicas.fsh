Alias: $paciente-odontologico = https://odontofhir.py/fhir/StructureDefinition/PacienteOdontologico
Alias: $allergyintolerance-code = http://hl7.org/fhir/ValueSet/allergyintolerance-code

Profile: AlergiasOdontologicas
Parent: AllergyIntolerance
Id: alergias-odontologicas
Title: "Alergias e Intolerancias Odontológicas"
Description: "Perfil para registrar alergias e intolerancias en pacientes odontológicos en Paraguay."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/AlergiasOdontologicas"

// Paciente afectado
* patient 1..1 MS only Reference($pacienteodontologico)
* patient ^short = "Paciente afectado por la alergia o intolerancia"

// Estado clínico de la alergia
* clinicalStatus 1..1 MS
* clinicalStatus from http://hl7.org/fhir/ValueSet/allergyintolerance-clinical (required)
* clinicalStatus ^short = "Activo, inactivo o resuelto"

// Tipo de reacción
* type 1..1 MS
* type from http://hl7.org/fhir/ValueSet/allergyintolerance-type (required)
* type ^short = "Alergia o Intolerancia"

// Código de la alergia
* code 1..1 MS
* code from $allergyintolerance-code (example)
* code ^short = "Código que identifica la alergia o intolerancia"
