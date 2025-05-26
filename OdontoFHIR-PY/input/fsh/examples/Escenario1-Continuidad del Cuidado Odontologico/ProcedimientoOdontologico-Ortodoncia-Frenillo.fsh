Instance: ProcedimientoOdontologico-JuanOrtodoncia-ColocacionBrackets
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Procedimiento Odontologico: Colocación de brackets en Juan tratamiento de ortodoncia"
Description: "Inicio de tratamiento ortodóntico con colocación de brackets metálicos."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14001OF "Tratamiento de ortodoncia"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(/encounter-consultaodontologica-juanortodoncia-2)
* performedDateTime = "2023-04-15T09:00:00-03:00"
* performer.actor = Reference(/practitioner-profesionalodontologodrajuliaescenario1)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(/condition-hallazgoodontologico-juanortodoncia-doloratm)
* reasonReference[1] = Reference(/condition-hallazgoodontologico-juanortodoncia-maloclusion)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"

