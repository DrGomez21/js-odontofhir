Instance: ProcedureProfilaxisJuanE2
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Profilaxis con ultrasonido"
Description: "Limpieza de sarro realizada con ultrasonido como tratamiento inicial."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14008OF "Limpieza de sarro"
* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(Encounter/)
* performedDateTime = "2011-06-15T09:00:00-03:00"
* performer.actor = Reference(Practitioner/DraJulia)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(Condition/)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13047OF "Diente incisivo central inferior izquierdo temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"
