Instance: ProcedureEducacionHigieneJuanE2
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Reforzamiento de higiene oral"
Description: "Educación al paciente sobre técnicas de higiene oral como parte del tratamiento."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14013OF "Asistencia en higiene oral"
* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(Encounter/)
* performedDateTime = "2011-06-15T09:00:00-03:00"
* performer.actor = Reference(Practitioner/DraJulia)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(Condition/)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13047OF "Diente incisivo central inferior izquierdo temporal completo"
