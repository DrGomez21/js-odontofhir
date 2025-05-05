Instance: ProcedureProfilaxisJuanE2
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Profilaxis con ultrasonido"
Description: "Limpieza de sarro realizada con ultrasonido como tratamiento inicial."

* status = #completed
* code = $VSProcedimientoOdontologico#14008OF "Limpieza de sarro"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro2-JuanOdontopediatria)
* performedDateTime = "2025-04-29T09:30:00-03:00"
* performer.actor = Reference(ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1)
* reasonReference[0] = Reference(ConditionSarroJuanE1)
* bodySite = $VSAnatomiaDental#13047OF "Diente incisivo central inferior izquierdo temporal completo"
