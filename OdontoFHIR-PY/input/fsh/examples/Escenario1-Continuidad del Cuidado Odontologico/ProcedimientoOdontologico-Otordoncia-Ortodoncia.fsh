Instance: ProcedureRefaccionBracketsJuanE3
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Tratamiento de Ortodoncia"
Description: "Reparación de bracket desprendido y control de aparatología fija."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14001OF "Tratamiento de ortodoncia"
* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(Encounter/)
* performedDateTime = "2017-06-15T10:00:00-03:00"
* performer.actor = Reference(Practitioner/DraJulia)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(Condition/)
* reasonReference[1] = Reference(Condition/)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"

