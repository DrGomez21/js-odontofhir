Alias: $paciente-odontologico = https://odontofhir.py/fhir/StructureDefinition/PacienteOdontologico
Alias: $odontologo = https://odontofhir.py/fhir/StructureDefinition/Odontologo
Alias: $encounter-type = http://hl7.org/fhir/ValueSet/encounter-type
Alias: $encounter-status = http://hl7.org/fhir/ValueSet/encounter-status
Alias: $dental-observation-codes = http://hl7.org/fhir/us/dental-data-exchange/ValueSet/dental-observation-codes
Alias: $dental-anatomy = http://hl7.org/fhir/us/dental-data-exchange/ValueSet/dental-anatomy

Profile: EncuentroOdontologico
Parent: Encounter
Id: encuentro-odontologico
Title: "Encuentro Odontológico"
Description: "Perfil que representa una consulta odontológica, incluyendo el odontólogo, el paciente y los hallazgos clínicos registrados."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/EncuentroOdontologico"

// **Paciente y Odontólogo**
* subject 1..1 MS only Reference($paciente-odontologico)
* subject ^short = "Paciente atendido en la consulta"

* participant 1..1 MS
* participant.individual only Reference($odontologo)
* participant ^short = "Odontólogo que atendió al paciente"

// **Estado y Tipo de Encuentro**
* status 1..1 MS from $encounter-status (required)
* status ^short = "Estado del encuentro (en curso, finalizado, cancelado)"

* class 1..1 MS
* class ^short = "Tipo de consulta (ambulatoria, urgencia, control, etc.)"

* type 1..1 MS from $encounter-type (extensible)
* type ^short = "Tipo específico del encuentro odontológico"

// **Fecha y Hora**
* period 1..1 MS
* period.start 1..1 MS
* period.start ^short = "Fecha y hora de inicio del encuentro"
* period.end 0..1
* period.end ^short = "Fecha y hora de finalización del encuentro (si aplica)"

// **Hallazgos Odontológicos**
* diagnosis 0..* MS
* diagnosis.condition only Reference(HallazgosOdontologicos)
* diagnosis ^short = "Hallazgos clínicos registrados durante la consulta"

// **Procedimientos Odontológicos**
* procedure 0..* MS
* procedure.procedure only Reference(ProcedimientoOdontologico)
* procedure ^short = "Procedimientos realizados en el encuentro"

// **Notas y Observaciones**
* note 0..* MS
* note.text 1..1 MS
* note ^short = "Notas generales del encuentro odontológico"
