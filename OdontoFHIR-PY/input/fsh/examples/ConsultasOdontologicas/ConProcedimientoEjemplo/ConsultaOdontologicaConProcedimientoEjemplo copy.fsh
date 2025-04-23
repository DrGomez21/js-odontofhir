Instance: ConsultaOdontologicaConProcedimientoEjemplo

InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Consulta Odontológica de control, que queda abierta"
Description: "Consulta odontológica sin hallazgos ni procedimientos registrados aún."

* status = #in-progress
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(Patient/24)
* subject.display = "Paciente Universitario ejemplo"

* participant[0].individual = Reference(Practitioner/23) 
* participant[0].individual.display = "Odontólogo ejemplo"

* period.start = "2025-04-23T09:00:00-03:00"
