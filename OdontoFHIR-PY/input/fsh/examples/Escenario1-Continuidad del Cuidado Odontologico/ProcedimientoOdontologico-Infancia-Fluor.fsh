Instance: ProcedureFluorJuanE2
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Aplicación de flúor"
Description: "Aplicación tópica de flúor para fortalecimiento del esmalte dental."

* status = #completed
* code = $VSProcedimientoOdontologico#14014OF "Aplicación de flúor"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro2-JuanOdontopediatria)
* performedDateTime = "2025-04-29T09:45:00-03:00"
* performer.actor = Reference(ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1)
* reasonReference[0] = Reference(ConditionHigieneOralDeficienteJuanE1)
* bodySite = $VSAnatomiaDental#13048OF "Diente incisivo central inferior derecho temporal completo"
