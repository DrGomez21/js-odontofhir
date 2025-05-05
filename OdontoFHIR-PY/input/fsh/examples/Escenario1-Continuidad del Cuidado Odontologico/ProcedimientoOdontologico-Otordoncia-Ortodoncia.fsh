Instance: ProcedureRefaccionBracketsJuanE3
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Reparación de brackets"
Description: "Reparación de bracket desprendido y control de aparatología fija."

* status = #completed
* code = $VSProcedimientoOdontologico#234291000221101 "Reparación de aparatología ortodóntica fija"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro3OrtodonciaRefaccionJuan)
* performedDateTime = "2029-10-10T11:20:00-03:00"
* performer.actor = Reference(ProfesionalOdontologoDrLeandroEjemploEscenario2)
* reasonReference[0] = Reference(ConditionMaloclusionJuanEOrt)
* bodySite = $VSAnatomiaDental#13050OF "Diente canino inferior derecho temporal completo"

