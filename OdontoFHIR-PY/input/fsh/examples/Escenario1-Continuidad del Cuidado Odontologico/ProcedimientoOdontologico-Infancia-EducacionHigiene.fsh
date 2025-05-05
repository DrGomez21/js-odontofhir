Instance: ProcedureEducacionHigieneJuanE2
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Reforzamiento de higiene oral"
Description: "Educación al paciente sobre técnicas de higiene oral como parte del tratamiento."

* status = #completed
* code = $VSProcedimientoOdontologico#14013OF "Asistencia en higiene oral"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro2-JuanOdontopediatria)
* performedDateTime = "2025-04-29T10:00:00-03:00"
* performer.actor = Reference(ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1)
* reasonReference[0] = Reference(ConditionHigieneOralDeficienteJuanE1)
* bodySite = $VSAnatomiaDental#13047OF "Diente incisivo central inferior izquierdo temporal completo"
