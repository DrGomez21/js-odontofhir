Instance: ConditionSarroJuanE1
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Sarro en paciente pediátrico"
Description: "Acumulación de sarro detectada durante el primer encuentro de Juan."

* code = https://odontofhir.py/fhir/CodeSystem/Hallazgos-OdontoFHIR-1#12002OF "Acumulación de sarro en dientes"
* subject = Reference(Patient/JuanSanchez)
* encounter = Reference(Encounter/infancia1)
* recordedDate = "2017-05-22"
* asserter = Reference(Practitioner/DraJulia)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13047OF "Diente incisivo central inferior izquierdo temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"
