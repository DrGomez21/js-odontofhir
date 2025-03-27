Alias: $PacienteOdontologico = https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-PacienteOdontologico-Patient-1
Alias: $allergyintolerance-code = http://hl7.org/fhir/ValueSet/allergyintolerance-code

Profile: OdontoFHIRAllergyIntolerance1  
Parent: AllergyIntolerance
Id: OdontoFHIR-AllergyIntolerance-1
Title: "Alergias e Intolerancias Odontológicas"
Description: "Perfil para registrar alergias e intolerancias en pacientes odontológicos en Paraguay."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-AllergyIntolerance-1"

//Must Support
* patient and clinicalStatus and type and code MS

// Paciente afectado
* patient 1..1 
* patient only Reference($PacienteOdontologico)
* patient ^short = "Paciente afectado por la alergia o intolerancia"

// Estado clínico de la alergia
* clinicalStatus 1..1
* clinicalStatus from http://hl7.org/fhir/ValueSet/allergyintolerance-clinical (required)
* clinicalStatus ^short = "Activo, inactivo o resuelto"

// Tipo de reacción
* type 1..1 
* type from http://hl7.org/fhir/ValueSet/allergyintolerance-type (required)
* type ^short = "Alergia o Intolerancia"

// Código de la alergia
* code 1..1
* code from $allergyintolerance-code (example)
* code ^short = "Código que identifica la alergia o intolerancia"
