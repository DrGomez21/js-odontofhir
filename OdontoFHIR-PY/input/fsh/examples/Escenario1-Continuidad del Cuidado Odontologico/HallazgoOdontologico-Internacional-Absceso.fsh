Instance: HallazgoOdontologico-JuanInternacional-Absceso
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico - Absceso periapical (diente 13003)"
Description: "Absceso periapical observado en Juan durante consulta en el extranjero, afectando el primer molar superior derecho permanente."

* status = #final
* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12001OF "Absceso"
* subject = Reference(Patient/patient-pacientejuansanchezescenario1)
* encounter = Reference(Encounter/encounter-consultaodontologica-juaninternacional-1)
* effectiveDateTime = "2023-04-15"
* performer = Reference(Practitioner/practitioner-profesionalodontologodraerikaescenario1)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13003OF "Primer molar superior derecho permanente completo"
