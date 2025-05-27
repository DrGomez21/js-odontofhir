Instance: HallazgoOdontologico-JuanOdontopediatria-Sarro
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontologico: Sarro en paciente pediátrico"
Description: "Acumulación de sarro detectada durante el primer encuentro de Juan."

* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12002OF "Acumulación de sarro en dientes"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* encounter = Reference(/encounter-consultaodontologica-juanodontopediatria-1)
* recordedDate = "2017-05-22"
* asserter = Reference(/practitioner-profesionalodontologodrajuliaescenario1)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13047OF "Diente incisivo central inferior izquierdo temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"
