Instance: HallazgoOdontologicoEnciasSangrantesOdontologicoJuanE1
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Sangrado de encías en paciente pediátrico"
Description: "Encías sangrantes observadas durante el primer encuentro de Juan."

* code = https://odontofhir.py/fhir/CodeSystem/Hallazgos-OdontoFHIR-1#12003OF "Encías sangrantes"
* subject = Reference(Patient/JuanSanchez)
* encounter = Reference(Encounter/infancia1)
* recordedDate = "2011-05-22"
* asserter = Reference(Practitioner/DraJulia)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13050OF "Diente canino inferior derecho temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13051OF "Primer diente molar inferior derecho temporal completo"
