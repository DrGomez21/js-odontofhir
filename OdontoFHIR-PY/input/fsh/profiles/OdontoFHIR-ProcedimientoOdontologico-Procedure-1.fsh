Profile: OdontoFHIRProcedimientoOdontologicoProcedure1  
Parent: Procedure

Id: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Procedimiento Odontológico"
Description: """
Este perfil se utiliza para documentar los procedimientos odontológicos realizados en un paciente durante un encuentro odontológico. 
Incluye el diente tratado, la relación con hallazgos previos y el odontólogo responsable.
"""
* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ProcedimientoOdontologico-Procedure-1"

// MustSupport
* code and subject and encounter and performed[x] and reasonReference MS
* bodySite and status and performer MS


// Código del procedimiento realizado
* code 1..1
* code from $procedimiento-codes (required)
* code ^short = "Procedimiento realizado"
* code ^definition = "Código que representa el procedimiento odontológico realizado en el paciente."

// Paciente al que se le realizó el procedimiento
* subject 1..1
* subject 1..1 
* subject only Reference($PacienteOdontologico)
* subject ^short = "Paciente asociado"
* subject ^definition = "Referencia al paciente en el que se realizó el procedimiento odontológico."

// Encuentro odontológico en el que se realizó el procedimiento
* encounter 1..1 
* encounter only Reference($EncuentroOdontologico)
* encounter ^short = "Encuentro odontológico asociado"
* encounter ^definition = "Referencia a la consulta en el que se realizó el procedimiento."

// Fecha en la que se realizó el procedimiento
* performed[x] 1..1
* performed[x] ^short = "Fecha del procedimiento"
* performed[x] ^definition = "Fecha y hora en la que se llevó a cabo el procedimiento odontológico."

// Odontólogo responsable del procedimiento
* performer 1..1 
* performer.actor only Reference($ProfesionalOdontologico)
* performer ^short = "Odontólogo que realizó el procedimiento"
* performer ^definition = "Referencia al odontólogo que realizó el procedimiento."

// Relación con hallazgos previos
* reasonReference 0..* 
* reasonReference only Reference($HallazgosOdontologicos)
* reasonReference ^short = "Hallazgos clínicos relacionados"
* reasonReference ^definition = "Referencia a los hallazgos clínicos observados que justificaron el procedimiento."

// Diente tratado
* bodySite 1..1
* bodySite from $dental-anatomy (preferred)
* bodySite ^short = "Diente tratado"
* bodySite ^definition = "Indica el diente donde se realizó el procedimiento odontológico."

// Estado del procedimiento (completado, planeado, en progreso)
* status 1..1
* status ^short = "Estado del procedimiento"
* status ^definition = "Estado del procedimiento realizado (completado, planeado, en progreso)."

