Instance: Encuentro2OrtodonciaJuan
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 2 – Ortodoncia (Colocación)"
Description: "Encuentro para inicio de tratamiento ortodóntico con colocación de brackets."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(PacienteJuanEjemploEscenario1)
* participant.individual = Reference(ProfesionalOdontologoDrLeandroEjemploEscenario2)
* period.start = "2029-09-22T10:00:00-03:00"

// Procedimiento asociado
* reasonReference[procedimiento][0] = Reference(ProcedureColocacionBracketsJuanEOrt)

