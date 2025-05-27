Instance: HallazgoOdontologico-JuanOrtodoncia-Maloclusion
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico: Maloclusión Clase II en Juan tratamiento de ortodoncia"

Description: "Se diagnostica maloclusión Clase II como parte del examen ortodóntico."

* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12014OF "Maloclusión"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* encounter = Reference(/encounter-consultaodontologica-juanortodoncia-1)
* recordedDate = "2017-02-22"
* asserter = Reference(/practitioner-profesionalodontologodrleandroescenario1)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"
