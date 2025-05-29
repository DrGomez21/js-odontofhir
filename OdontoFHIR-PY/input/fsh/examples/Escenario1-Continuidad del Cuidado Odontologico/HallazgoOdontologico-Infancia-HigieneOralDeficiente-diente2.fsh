Instance: HallazgoOdontologico-JuanOdontopediatria-HigieneOralDeficienteDD
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico - Higiene oral deficiente (diente derecho)"
Description: "Se identificó higiene oral deficiente en Juan durante su primera consulta, afectando un incisivo inferior derecho."

* status = #final
* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12012OF "Higiene oral deficiente"
* subject = Reference(Patient/patient-pacientejuansanchezescenario1)
* encounter = Reference(Encounter/encounter-consultaodontologica-juanodontopediatria-1)
* effectiveDateTime = "2011-05-22"
* performer = Reference(Practitioner/practitioner-profesionalodontologodrajuliaescenario1)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"
