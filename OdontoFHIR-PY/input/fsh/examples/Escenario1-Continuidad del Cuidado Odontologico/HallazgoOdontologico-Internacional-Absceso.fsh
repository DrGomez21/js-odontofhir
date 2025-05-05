Instance: ConditionAbscesoJuanEGlobal
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Absceso periapical"
Description: "Se diagnostica absceso periapical en premolar afectado."

* code = https://odontofhir.py/fhir/CodeSystem/Hallazgos-OdontoFHIR-1#12001OF "Absceso"
* subject = Reference(Patient/JuanSanchez)
* encounter = Reference(Encounter/infancia1)
* recordedDate = "2023-04-15"
* asserter = Reference(Practitioner/DraJulia)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13003OF "Primer molar superior derecho permanente completo"

