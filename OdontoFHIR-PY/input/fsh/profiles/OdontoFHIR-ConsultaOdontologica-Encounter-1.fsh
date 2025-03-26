Alias: $PacienteOdontologico = https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-PacienteOdontologico-Patient-1
Alias: $ProfesionalOdontologico = https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ProfesionalOdontologico-Practitioner-1
Alias: $encounter-status = http://hl7.org/fhir/ValueSet/encounter-status

Profile: OdontoFHIRConsultaOdontologicaEncounter1
Parent: Encounter
Id: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico"
Description: "Perfil que representa una consulta odontológica, incluyendo el odontólogo, el paciente y los hallazgos clínicos registrados."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"

// Must Support
* subject and participant and status and class MS
* period and diagnosis.condition and procedure.procedure MS

// Paciente que consulta
* subject 1..1
* subject only Reference($PacienteOdontologico)
* subject ^short = "Paciente atendido en la consulta"

// Odontólogo que consulta
* participant 1..1
* participant.individual only Reference($ProfesionalOdontologico)
* participant ^short = "Odontólogo que atendió al paciente"

// Estado y Tipo de Encuentro
* status 1..1
* status from $encounter-status (required)
* status ^short = "Estado del encuentro (en curso, finalizado, cancelado)"

* class 1..1
* class ^short = "Tipo de consulta (ambulatoria, urgencia, control, etc.)"

// El periodo de duracion del encuentro 
* period 1..1
* period.start 1..1
* period.start MS
* period.start ^short = "Fecha y hora de inicio del encuentro"
* period.end 0..1
* period.end ^short = "Fecha y hora de finalización del encuentro"

// Hallazgos Odontológicos
* diagnosis 0..*
* diagnosis.condition only Reference(OdontoFHIRHallazgosOdontologicoObservation1)
* diagnosis ^short = "Hallazgos clínicos registrados durante la consulta"

// **Procedimientos Odontológicos**
* procedure 0..*
* procedure.procedure only Reference(OdontoFHIRProcedimientoOdontologicoProcedure1)
* procedure ^short = "Procedimientos realizados en el encuentro"

// **Notas y Observaciones**
* note 0..*
* note.text 1..1 
* note.text MS
* note ^short = "Notas generales del encuentro odontológico"
