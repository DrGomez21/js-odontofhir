Instance: Encuentro1OrtodonciaJuan
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 1 – Adolescencia (Ortodoncia)"
Description: "Consulta por molestias al morder. Se diagnostica maloclusión Clase II, apiñamiento dental y dolor leve en ATM."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(PacienteJuanEjemploEscenario1)
* participant.individual = Reference(ProfesionalOdontologoDrLeandroEjemploEscenario2)
* period.start = "2029-09-15T14:00:00-03:00"

// Hallazgos clínicos
* diagnosis[0].condition = Reference(ConditionMaloclusionJuanEOrt)
* diagnosis[1].condition = Reference(ConditionDolorATMJuanEOrt)
* diagnosis[2].condition = Reference(ConditionApinamientoJuanEOrt)
