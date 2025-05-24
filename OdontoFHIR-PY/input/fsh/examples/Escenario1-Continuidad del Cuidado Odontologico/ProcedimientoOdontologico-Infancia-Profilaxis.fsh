Instance: ProcedimientoOdontologico-JuanOdontopediatria-Profilaxis
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Procedimiento Odontologico: Profilaxis con ultrasonido en paciente pediatrico"
Description: "Limpieza de sarro realizada con ultrasonido como tratamiento inicial."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14008OF "Limpieza de sarro"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(/encounter-consultaodontologica-juanodontopediatria-2)
* performedDateTime = "2011-06-15T09:00:00-03:00"
* performer.actor = Reference(/practitioner-profesionalodontologodrajuliaescenario2)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(/condition-hallazgoodontologico-juanodontopediatria-sarro)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13047OF "Diente incisivo central inferior izquierdo temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"
