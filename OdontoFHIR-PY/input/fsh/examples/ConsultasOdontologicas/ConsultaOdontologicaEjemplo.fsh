Instance: ConsultaOdontologicaEjemplo
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Consulta Odontológica de control"
Description: "Consulta odontológica sin hallazgos ni procedimientos registrados aún."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject.reference = "Patient/53"
* subject.display = "Paciente ejemplo"

* participant.individual.reference = "Practitioner/patient-pacientejuansanchezescenario1"
* participant.individual.display = "Odontólogo ejemplo"

* period.start = "2025-04-20T09:00:00-03:00"
* period.end = "2025-04-20T09:45:00-03:00"
