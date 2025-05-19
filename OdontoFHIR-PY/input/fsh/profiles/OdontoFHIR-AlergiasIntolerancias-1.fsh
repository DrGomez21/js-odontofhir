Profile: OdontoFHIRAlergiasIntolerancias1  
Parent: AllergyIntolerance
Id: OdontoFHIR-AlergiasIntolerancias-1
Title: "Alergias e Intolerancias Odontológicas"
Description: "Perfil para registrar alergias e intolerancias en pacientes odontológicos en Paraguay."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-AlergiasIntolerancias-1"

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
* type from https://odontofhir.py/fhir/ValueSet/AlergiasIntolerancias-OdontoFHIR-1 (required) 
* type ^short = "Alergia o Intolerancia"

// Código de la alergia
* code 1..1
* code from $VSAlergiasIntolerancias  (required)
* code ^short = "Código que identifica la alergia o intolerancia"
