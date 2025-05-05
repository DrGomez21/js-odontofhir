Instance: ProcedureColocacionBracketsJuanEOrt
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Colocación de brackets"
Description: "Inicio de tratamiento ortodóntico con colocación de brackets metálicos."

* status = #completed
* code = $VSProcedimientoOdontologico#428881005 "Colocación de brackets"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro1OrtodonciaJuan)
* performedDateTime = "2029-09-15T14:45:00-03:00"
* performer.actor = Reference(ProfesionalOdontologoDrLeandroEjemploEscenario2)
* reasonReference[0] = Reference(ConditionMaloclusionJuanEOrt)
* reasonReference[1] = Reference(ConditionApinamientoJuanEOrt)
* bodySite = $VSAnatomiaDental#13050OF "Diente canino inferior derecho temporal completo"


