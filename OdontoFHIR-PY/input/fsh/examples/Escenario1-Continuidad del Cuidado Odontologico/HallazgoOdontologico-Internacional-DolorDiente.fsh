Instance: HallazgoOdontologico-JuanInternacional-DolorDiente
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico - Dolor de diente superior (diente 13003)"
Description: "Paciente refiere dolor agudo en el primer molar superior derecho durante consulta en el extranjero."

* status = #final
* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12021OF "Dolor de diente"
* subject = Reference(Patient/patient-pacientejuansanchezescenario1)
* encounter = Reference(Encounter/encounter-consultaodontologica-juaninternacional-1)
* effectiveDateTime = "2023-04-15"
* performer = Reference(Practitioner/practitioner-profesionalodontologodraerikaescenario1)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13003OF "Primer molar superior derecho permanente completo"
