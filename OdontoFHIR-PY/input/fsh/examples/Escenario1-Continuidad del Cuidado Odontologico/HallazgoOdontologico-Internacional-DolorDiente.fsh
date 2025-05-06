Instance: ConditionDolorDienteJuanEGlobal
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Dolor de diente superior"
Description: "Paciente refiere dolor agudo en premolar superior derecho."

* code = https://odontofhir.py/fhir/CodeSystem/Hallazgos-OdontoFHIR-1#x "Dolor de diente"
* subject = Reference(Patient/JuanSanchez)
* encounter = Reference(Encounter/infancia1)
* recordedDate = "2023-04-15"
* asserter = Reference(Practitioner/DraErika)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13003OF "Primer molar superior derecho permanente completo"
