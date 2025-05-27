Instance: HallazgoOdontologico-JuanOdontopediatria-EnciasSangrantes
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontologico: Sangrado de encías en paciente pediátrico"
Description: "Encías sangrantes observadas durante el primer encuentro de Juan."

* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12003OF "Encías sangrantes"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* encounter = Reference(/encounter-consultaodontologica-juanodontopediatria-1)
* recordedDate = "2011-05-22"
* asserter = Reference(/practitioner-profesionalodontologodrajuliaescenario1)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13050OF "Diente canino inferior derecho temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13051OF "Primer diente molar inferior derecho temporal completo"
