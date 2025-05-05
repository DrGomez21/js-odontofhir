Instance: EncuentroGlobalSmileJuan
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico – Global Smile (Extranjero)"
Description: "Consulta por dolor agudo en premolar superior derecho. Se diagnostica absceso periapical y se realiza tratamiento de conducto."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(PacienteJuanEjemploEscenario1)
* participant.individual = Reference(ProfesionalOdontologoDraErikaEjemploEscenario3)
* period.start = "2033-03-11T16:00:00-03:00"

// Hallazgos
* diagnosis[0].condition = Reference(ConditionDolorDienteJuanEGlobal)
* diagnosis[1].condition = Reference(ConditionAbscesoJuanEGlobal)

// Procedimiento realizado
* reasonReference[procedimiento][0] = Reference(ProcedureTratamientoConductoJuanEGlobal)
