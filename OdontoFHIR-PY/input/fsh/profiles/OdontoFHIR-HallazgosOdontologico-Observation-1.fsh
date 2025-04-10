Profile: OdontoFHIRHallazgosOdontologicosCondition1  
Parent: Condition
Id: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgos Odontológicos"
Description: """
Perfil FHIR para representar hallazgos clínicos odontológicos como condiciones persistentes en pacientes.
Cada hallazgo puede estar asociado a un diente específico utilizando bodySite.
"""

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-HallazgosOdontologicos-Condition-1"

// MustSupport global
* code and subject and encounter and recordedDate and asserter and bodySite MS

// Código del hallazgo clínico (Caries, enfermedad periodontal, etc.)
* code 1..1
* code from $dental-observation-codes (required)
* code ^short = "Código del hallazgo odontológico"
* code ^definition = "Código estandarizado que representa el hallazgo clínico observado en el paciente."

// Paciente afectado
* subject 1..1
* subject only Reference($PacienteOdontologico)
* subject ^short = "Paciente asociado"
* subject ^definition = "Referencia al paciente al que pertenece el hallazgo odontológico."

// Encuentro donde se realizó el hallazgo
* encounter 1..1
* encounter only Reference($EncuentroOdontologico)
* encounter ^short = "Encuentro odontológico asociado"
* encounter ^definition = "Encuentro en el cual se identificó esta condición."

// Fecha de registro del hallazgo
* recordedDate 1..1
* recordedDate ^short = "Fecha de registro"
* recordedDate ^definition = "Fecha en que el hallazgo fue registrado por el profesional."

// Profesional que identificó el hallazgo
* asserter 1..1
* asserter only Reference($ProfesionalOdontologico)
* asserter ^short = "Odontólogo que registró el hallazgo"
* asserter ^definition = "Profesional odontólogo que identificó y registró esta condición."

// Diente afectado
* bodySite 1..1
* bodySite from $dental-anatomy (preferred)
* bodySite ^short = "Diente afectado"
* bodySite ^definition = "Código anatómico del diente afectado por el hallazgo clínico."