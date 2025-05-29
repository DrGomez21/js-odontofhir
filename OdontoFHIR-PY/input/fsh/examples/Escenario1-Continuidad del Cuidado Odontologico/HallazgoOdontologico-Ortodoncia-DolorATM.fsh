Instance: HallazgoOdontologico-JuanOrtodoncia-DolorATM
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico - Dolor en ATM (diente 13025)"
Description: "Paciente refiere dolor leve en la articulación temporomandibular durante la consulta, con relación al incisivo central inferior derecho."

* status = #final
* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12019OF "Dolor de la articulación temporomandibular"
* subject = Reference(Patient/patient-pacientejuansanchezescenario1)
* encounter = Reference(Encounter/encounter-consultaodontologica-juanortodoncia-1)
* effectiveDateTime = "2017-02-22"
* performer = Reference(Practitioner/practitioner-profesionalodontologodrleandroescenario1)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"
