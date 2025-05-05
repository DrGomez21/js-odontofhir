Instance: ProcedureTratamientoConductoJuanEGlobal
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Tratamiento de conducto"
Description: "Procedimiento endodóntico para drenar absceso y preservar el diente."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14012OF "Tratamiento de conducto"
* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(Encounter/)
* performedDateTime = "2023-04-15T09:00:00-03:00"
* performer.actor = Reference(Practitioner/DraJulia)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(Condition/)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13003OF "Primer molar superior derecho permanente completo"
