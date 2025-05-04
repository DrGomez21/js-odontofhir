Instance: Encuentro1-JuanOdontopediatria
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 1 – Juan (Odontopediatría)"
Description: "Consulta inicial por sangrado de encías y mal aliento. Se registran hallazgos clínicos sin procedimientos en esta fase."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(PacienteJuanEjemploEscenario1)
* participant.individual = Reference(ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1)
* period.start = "2025-04-22T09:00:00-03:00"

// Hallazgos clínicos registrados
* diagnosis[0].condition = Reference(ConditionSarroJuanE1)
* diagnosis[1].condition = Reference(ConditionInflamacionGingivalJuanE1)
* diagnosis[2].condition = Reference(ConditionSangradoEncíasJuanE1)
* diagnosis[3].condition = Reference(ConditionHigieneOralDeficienteJuanE1)
