Instance: ConditionDolorATMJuanEOrt
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Dolor en articulación temporomandibular"
Description: "Paciente refiere dolor leve en la ATM durante la consulta."

* code = https://odontofhir.py/fhir/CodeSystem/Hallazgos-OdontoFHIR-1#12019OF "Dolor de la articulación temporomandibular "
* subject = Reference(Patient/JuanSanchez)
* encounter = Reference(Encounter/infancia1)
* recordedDate = "2017-02-22"
* asserter = Reference(Practitioner/DraJulia)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"
