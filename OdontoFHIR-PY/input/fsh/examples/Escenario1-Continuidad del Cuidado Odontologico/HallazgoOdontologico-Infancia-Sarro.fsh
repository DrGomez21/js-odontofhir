Instance: HallazgoOdontologico-JuanOdontopediatria-Sarro
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico - Sarro (diente 13047)"
Description: "Acumulación de sarro observada en Juan durante su primer encuentro, afectando el incisivo central inferior izquierdo temporal completo."

* status = #final
* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12002OF "Acumulación de sarro en dientes"
* subject = Reference(Patient/patient-pacientejuansanchezescenario1)
* encounter = Reference(Encounter/encounter-consultaodontologica-juanodontopediatria-1)
* effectiveDateTime = "2017-05-22"
* performer = Reference(Practitioner/practitioner-profesionalodontologodrajuliaescenario1)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13047OF "Diente incisivo central inferior izquierdo temporal completo"
