Instance: HallazgoOdontologico-JuanOdontopediatria-EnciasSangrantes
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico - Sangrado de encías (diente 13050)"
Description: "Encías sangrantes observadas en Juan durante su primer encuentro, afectando el canino inferior derecho temporal completo."

* status = #final
* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12003OF "Encías sangrantes"
* subject = Reference(Patient/patient-pacientejuansanchezescenario1)
* encounter = Reference(Encounter/encounter-consultaodontologica-juanodontopediatria-1)
* effectiveDateTime = "2011-05-22"
* performer = Reference(Practitioner/practitioner-profesionalodontologodrajuliaescenario1)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13050OF "Diente canino inferior derecho temporal completo"
