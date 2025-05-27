Instance: HallazgoOdontologico-JuanOdontopediatria-HigieneOralDeficiente
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontologico - Higiene oral deficiente en paciente pediátrico"
Description: "Se identificó higiene oral deficiente en Juan durante su primera consulta."

* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12012OF "Higiene oral deficiente"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* encounter = Reference(/encounter-consultaodontologica-juanodontopediatria-1)
* recordedDate = "2011-05-22"
* asserter = Reference(/practitioner-profesionalodontologodrajuliaescenario1)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13047OF "Diente incisivo central inferior izquierdo temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"
