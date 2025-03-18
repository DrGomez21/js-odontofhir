Alias: $dental-anatomy = http://hl7.org/fhir/us/dental-data-exchange/ValueSet/dental-anatomy
Alias: $odontologo = https://odontofhir.py/fhir/StructureDefinition/Odontologo
Alias: $paciente-odontologico = https://odontofhir.py/fhir/StructureDefinition/PacienteOdontologico
Alias: $encuentro-odontologico = https://odontofhir.py/fhir/StructureDefinition/EncuentroOdontologico
Alias: $hallazgos-odontologicos = https://odontofhir.py/fhir/StructureDefinition/HallazgosOdontologicos
Alias: $procedimiento-codes = http://hl7.org/fhir/us/dental-data-exchange/ValueSet/dental-procedures

Profile: ProcedimientoOdontologico
Parent: Procedure
Id: procedimiento-odontologico
Title: "Procedimiento Odontológico"
Description: """
Este perfil se utiliza para documentar los procedimientos odontológicos realizados en un paciente durante un encuentro odontológico. 
Incluye el diente tratado, la relación con hallazgos previos y el odontólogo responsable.
"""

* ^url = "https://odontofhir.py/fhir/StructureDefinition/ProcedimientoOdontologico"
* ^version = "1.0.0"
* ^status = #draft
* ^publisher = "OdontoFHIR-PY"
* ^contact.name = "Equipo de OdontoFHIR Paraguay"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "odontofhir@py.org"

// Código del procedimiento realizado
* code 1..1 MS
* code from $procedimiento-codes (required)
* code ^short = "Procedimiento realizado"
* code ^definition = "Código que representa el procedimiento odontológico realizado en el paciente."

// Paciente al que se le realizó el procedimiento
* subject 1..1 MS only Reference($paciente-odontologico)
* subject ^short = "Paciente asociado"
* subject ^definition = "Referencia al paciente en el que se realizó el procedimiento odontológico."

// Encuentro odontológico en el que se realizó el procedimiento
* encounter 1..1 MS only Reference($encuentro-odontologico)
* encounter ^short = "Encuentro odontológico asociado"
* encounter ^definition = "Referencia al encuentro odontológico en el que se realizó el procedimiento."

// Fecha en la que se realizó el procedimiento
* performed[x] 1..1 MS
* performed[x] ^short = "Fecha del procedimiento"
* performed[x] ^definition = "Fecha y hora en la que se llevó a cabo el procedimiento odontológico."

// Odontólogo responsable del procedimiento
* performer 1..1 MS only Reference($odontologo)
* performer ^short = "Odontólogo que realizó el procedimiento"
* performer ^definition = "Referencia al odontólogo que realizó el procedimiento."

// Relación con hallazgos previos
* reasonReference 0..* MS only Reference($hallazgos-odontologicos)
* reasonReference ^short = "Hallazgos clínicos relacionados"
* reasonReference ^definition = "Referencia a los hallazgos clínicos observados que justificaron el procedimiento."

// Diente o área tratada
* bodySite 1..1 MS
* bodySite from $dental-anatomy (preferred)
* bodySite ^short = "Diente o área de la boca tratada"
* bodySite ^definition = "Indica el diente o la estructura anatómica donde se realizó el procedimiento odontológico."

// Estado del procedimiento (completado, planeado, en progreso)
* status 1..1 MS
* status ^short = "Estado del procedimiento"
* status ^definition = "Estado del procedimiento realizado (completado, planeado, en progreso)."

// Posibilidad de agregar notas o información adicional
* note 0..* MS
* note ^short = "Notas sobre el procedimiento"
* note ^definition = "Comentarios adicionales sobre el procedimiento odontológico realizado."
