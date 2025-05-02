Profile: OdontoFHIRConsultaOdontologicaEncounter1
Parent: Encounter
Id: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico"
Description: "Perfil que representa una consulta odontológica, incluyendo el odontólogo, el paciente, los hallazgos y procedimientos clínicos registrados."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"

// Must Support
* subject and participant and status and class MS
* period and diagnosis.condition and reasonReference MS

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
* diagnosis.condition only Reference($HallazgosOdontologicos)
* diagnosis ^short = "Hallazgos clínicos registrados durante la consulta"

// Procedimientos Odontológicos
* reasonReference 0..*
* reasonReference ^slicing.discriminator.type = #type
* reasonReference ^slicing.discriminator.path = "$this"
* reasonReference ^slicing.rules = #open
* reasonReference contains procedimiento 0..*
* reasonReference[procedimiento] only Reference($ProcedimientoOdontologico)
* reasonReference[procedimiento] ^short = "Procedimientos que motivaron el encuentro"
