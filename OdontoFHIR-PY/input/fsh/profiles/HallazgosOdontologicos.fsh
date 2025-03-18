Alias: $dental-observation-codes = http://hl7.org/fhir/us/dental-data-exchange/ValueSet/dental-observation-codes
Alias: $dental-anatomy = http://hl7.org/fhir/us/dental-data-exchange/ValueSet/dental-anatomy
Alias: $odontologo = https://odontofhir.py/fhir/StructureDefinition/Odontologo
Alias: $paciente-odontologico = https://odontofhir.py/fhir/StructureDefinition/PacienteOdontologico
Alias: $encuentro-odontologico = https://odontofhir.py/fhir/StructureDefinition/EncuentroOdontologico
Alias: $dental-category = http://hl7.org/fhir/us/dental-data-exchange/CodeSystem/dental-category


Profile: HallazgosOdontologicos
Parent: Observation
Id: hallazgos-odontologicos
Title: "Hallazgos Odontológicos"
Description: """
Este perfil se utiliza para registrar los hallazgos clínicos observados durante un encuentro odontológico. 
Cada hallazgo puede estar asociado a un diente específico, según la anatomía dental.
"""

* ^url = "https://odontofhir.py/fhir/StructureDefinition/HallazgosOdontologicos"

// Categoría de la Observación 
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains dental 1..1 MS
* category[dental] = $dental-category#dental "Dental" (exactly)

// Código del hallazgo clínico
* code 1..1 MS
* code from $dental-observation-codes (required)
* code ^short = "Código del hallazgo odontológico"
* code ^definition = "Código estandarizado que representa el hallazgo clínico observado en el paciente."
// Valor del hallazgo clínico
* value[x] 1..1 MS
* value[x] from $dental-observation-codes (extensible)
* value[x] ^short = "Detalle del hallazgo"
* value[x] ^definition = "Detalle clínico del hallazgo observado en el paciente."


// Paciente al que pertenece el hallazgo
* subject 1..1 MS only Reference($paciente-odontologico)
* subject ^short = "Paciente asociado"
* subject ^definition = "Referencia al paciente al que pertenece el hallazgo odontológico."

// Encuentro en el que se registró el hallazgo
* encounter 1..1 MS only Reference($encuentro-odontologico)
* encounter ^short = "Encuentro odontológico asociado"
* encounter ^definition = "Referencia al encuentro odontológico en el que se documentó el hallazgo."

// Fecha y hora en que se registró el hallazgo
* effective[x] 1..1 MS
* effective[x] ^short = "Fecha del hallazgo"
* effective[x] ^definition = "Fecha y hora en la que se registró el hallazgo odontológico."

// Odontólogo que documentó el hallazgo
* performer 1..1 MS only Reference($odontologo)
* performer ^short = "Odontólogo que registró el hallazgo"
* performer ^definition = "Referencia al odontólogo que documentó la observación clínica."

// Diente o área afectada
* bodySite 1..1 MS
* bodySite from $dental-anatomy (preferred)
* bodySite ^short = "Diente o área de la boca afectada"
* bodySite ^definition = "Indica el diente o la estructura anatómica afectada por el hallazgo odontológico."

