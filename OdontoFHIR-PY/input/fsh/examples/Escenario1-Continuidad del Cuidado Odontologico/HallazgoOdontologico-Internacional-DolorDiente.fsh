Instance: HallazgoOdontologico-JuanInternacional-DolorDiente
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico: Dolor de diente superior en Juan durante consulta en el extranjero"

Description: "Paciente refiere dolor agudo en premolar superior derecho."

* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12021OF "Dolor de diente"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* encounter = Reference(/encounter-consultaodontologica-juaninternacional-1)
* recordedDate = "2023-04-15"
* asserter = Reference(/practitioner-profesionalodontologodraerikaescenario1)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13003OF "Primer molar superior derecho permanente completo"
