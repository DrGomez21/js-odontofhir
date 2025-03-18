Alias: $paciente-odontologico = https://odontofhir.py/fhir/StructureDefinition/PacienteOdontologico
Alias: $allergyintolerance-code = http://hl7.org/fhir/ValueSet/allergyintolerance-code

Profile: AlergiasOdontologicas
Parent: AllergyIntolerance
Id: alergias-odontologicas
Title: "Alergias e Intolerancias Odontológicas"
Description: "Perfil para registrar alergias e intolerancias en pacientes odontológicos en Paraguay."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/AlergiasOdontologicas"

// **Paciente afectado**
* patient 1..1 MS only Reference($paciente-odontologico)
* patient ^short = "Paciente afectado por la alergia o intolerancia"

// **Estado clínico de la alergia**
* clinicalStatus 1..1 MS
* clinicalStatus from http://hl7.org/fhir/ValueSet/allergyintolerance-clinical (required)
* clinicalStatus ^short = "Activo, inactivo o resuelto"

// **Estado de verificación**
* verificationStatus 1..1 MS
* verificationStatus from http://hl7.org/fhir/ValueSet/allergyintolerance-verification (required)
* verificationStatus ^short = "Si la alergia ha sido confirmada"

// **Tipo de reacción**
* type 1..1 MS
* type from http://hl7.org/fhir/ValueSet/allergyintolerance-type (required)
* type ^short = "Alergia o Intolerancia"

// **Nivel de criticidad**
* criticality 0..1 MS
* criticality from http://hl7.org/fhir/ValueSet/allergyintolerance-criticality (required)
* criticality ^short = "Gravedad de la reacción"

// **Código de la alergia**
* code 1..1 MS
* code from $allergyintolerance-code (example)
* code ^short = "Código que identifica la alergia o intolerancia"

// **Fecha de identificación**
* onset[x] 0..1 MS
* onset[x] ^short = "Fecha en la que se identificó la alergia"

// **Detalle de la reacción**
* reaction 0..* MS
* reaction ^short = "Descripción del evento adverso"

// **Síntomas observados**
* reaction.manifestation 1..* MS
* reaction.manifestation from http://hl7.org/fhir/ValueSet/clinical-findings (example)
* reaction.manifestation ^short = "Síntomas clínicos de la reacción"

// **Severidad de la reacción**
* reaction.severity 0..1 MS
* reaction.severity from http://hl7.org/fhir/ValueSet/allergyintolerance-severity (required)
* reaction.severity ^short = "Leve, moderada o severa"
