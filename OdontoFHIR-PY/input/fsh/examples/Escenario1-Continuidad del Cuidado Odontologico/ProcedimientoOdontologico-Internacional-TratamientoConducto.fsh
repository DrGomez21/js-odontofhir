Instance: ProcedureTratamientoConductoJuanEGlobal
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Tratamiento de conducto"
Description: "Procedimiento endodóntico para drenar absceso y preservar el diente."

* status = #completed
* code = $VSProcedimientoOdontologico#23406003 "Tratamiento de conducto"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(EncuentroGlobalSmileJuan)
* performedDateTime = "2033-03-11T16:30:00-03:00"
* performer.actor = Reference(ProfesionalOdontologoDraErikaEjemploEscenario3)
* reasonReference[0] = Reference(ConditionAbscesoJuanEGlobal)
* bodySite = $VSAnatomiaDental#13051OF "Primer diente molar inferior derecho temporal completo"
