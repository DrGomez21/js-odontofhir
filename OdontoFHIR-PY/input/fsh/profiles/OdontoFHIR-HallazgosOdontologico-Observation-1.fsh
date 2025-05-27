Profile: OdontoFHIRHallazgosOdontologicosObservation1
Parent: Observation
Id: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgos Odontológicos"
Description: """
Perfil FHIR para representar hallazgos clínicos odontológicos observados en un encuentro puntual.
Utiliza el recurso Observation para reflejar datos clínicos transitorios registrados durante la consulta.
"""

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-HallazgosOdontologicos-Observation-1"

// MustSupport
* status and code and subject and encounter and effectiveDateTime and performer and bodySite MS

// Estado de la observación
* status 1..1
* status = #final
* status ^short = "Estado de la observación"
* status ^definition = "Indica que la observación fue finalizada y registrada."

// Código del hallazgo observado
* code 1..1
* code from $VSHallazgosOdontologico (required)
* code ^short = "Código del hallazgo odontológico"
* code ^definition = "Código estandarizado que representa el hallazgo clínico observado en el paciente."

// Paciente observado
* subject 1..1
* subject only Reference($PacienteOdontologico)
* subject ^short = "Paciente asociado"
* subject ^definition = "Referencia al paciente al que pertenece el hallazgo odontológico."

// Encuentro clínico asociado
* encounter 1..1
* encounter only Reference($EncuentroOdontologico)
* encounter ^short = "Encuentro odontológico asociado"
* encounter ^definition = "Encuentro en el cual se observó este hallazgo."

// Fecha en que se realizó la observación
* effectiveDateTime 1..1
* effectiveDateTime ^short = "Fecha de observación"
* effectiveDateTime ^definition = "Fecha en que se realizó y documentó el hallazgo clínico."

// Profesional que realizó la observación
* performer 1..1
* performer only Reference($ProfesionalOdontologico)
* performer ^short = "Odontólogo que realizó la observación"
* performer ^definition = "Profesional odontólogo que observó y registró el hallazgo."

// Diente afectado
* bodySite 1..*
* bodySite from $VSAnatomiaDental (required)
* bodySite ^short = "Diente afectado"
* bodySite ^definition = "Código anatómico del diente afectado por el hallazgo clínico."
