Profile: OdontoFHIRConsultaOdontologicaEncounter1
Parent: Encounter
Id: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico"
Description: "Perfil que representa una consulta odontológica, incluyendo el odontólogo, el paciente, los hallazgos y procedimientos clínicos registrados."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"

// Must Support
* subject and participant and status and class MS
* period and reasonReference MS

// Paciente que consulta
* subject 1..1
* subject only Reference($PacienteOdontologico)
* subject ^short = "Paciente atendido en la consulta"

// Odontólogo que hace la consulta
* participant 1..1
* participant.individual 1..1
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



// Procedimientos Odontológicos y Hallazgos Odontologicos
* reasonReference 0..*
* reasonReference ^slicing.discriminator.type = #type
* reasonReference ^slicing.discriminator.path = "$this"
* reasonReference ^slicing.rules = #open

* reasonReference contains
    hallazgo 0..* and
    procedimiento 0..*

* reasonReference[hallazgo] only Reference($HallazgosOdontologicos)
* reasonReference[hallazgo] ^short = "Hallazgos clínicos observados durante la consulta"
* reasonReference[procedimiento] only Reference($ProcedimientoOdontologico)
* reasonReference[procedimiento] ^short = "Procedimientos que motivaron el encuentro"
