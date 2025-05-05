Instance: ConditionMaloclusionJuanEOrt
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Maloclusión Clase II"
Description: "Se diagnostica maloclusión Clase II como parte del examen ortodóntico."

* code = https://odontofhir.py/fhir/CodeSystem/Hallazgos-OdontoFHIR-1#12014OF "Maloclusión"
* subject = Reference(Patient/JuanSanchez)
* encounter = Reference(Encounter/infancia1)
* recordedDate = "2017-02-22"
* asserter = Reference(Practitioner/DraJulia)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"
