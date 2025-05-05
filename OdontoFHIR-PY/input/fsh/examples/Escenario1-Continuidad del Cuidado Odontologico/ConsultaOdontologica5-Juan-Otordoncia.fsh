Instance: Encuentro3OrtodonciaRefaccionJuan
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 3 – Ortodoncia (Reparación de brackets)"
Description: "Consulta por desprendimiento de brackets. Se realiza reparación y control."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(PacienteJuanEjemploEscenario1)
* participant.individual = Reference(ProfesionalOdontologoDrLeandroEjemploEscenario2)
* period.start = "2029-10-10T11:00:00-03:00"

// Procedimiento asociado
* reasonReference[procedimiento][0] = Reference(ProcedureRefaccionBracketsJuanE3)
