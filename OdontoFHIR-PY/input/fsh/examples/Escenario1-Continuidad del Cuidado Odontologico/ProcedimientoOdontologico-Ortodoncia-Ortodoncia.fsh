Instance: ProcedimientoOdontologico-JuanOrtodoncia-TratamientoOrtodoncia
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Procedimiento Odontologico: Reajuste y reparacion de brackets en Juan tratamiento de ortodoncia"
Description: "Reparación de bracket desprendido y control de aparatología fija."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14001OF "Tratamiento de ortodoncia"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(/encounter-consultaodontologica-juanortodoncia-3)
* performedDateTime = "2017-06-15T10:00:00-03:00"
* performer.actor = Reference(/practitioner-profesionalodontologodrajuliaescenario2) 
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(/condition-hallazgoodontologico-juanortodoncia-doloratm)
* reasonReference[1] = Reference(/condition-hallazgoodontologico-juanortodoncia-maloclusion)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13025OF "Incisivo central inferior derecho permanente completo"

