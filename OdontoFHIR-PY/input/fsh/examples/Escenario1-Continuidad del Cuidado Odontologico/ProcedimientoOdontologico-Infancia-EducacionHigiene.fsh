Instance: ProcedimientoOdontologico-JuanOdontopediatria-EducacionHigiene
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Procedimiento Odontologico: Reforzamiento de higiene oral en paciente pediatrico"
Description: "Educación al paciente sobre técnicas de higiene oral como parte del tratamiento."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14013OF "Asistencia en higiene oral"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(/encounter-consultaodontologica-juanodontopediatria-2)
* performedDateTime = "2011-06-15T09:00:00-03:00"
* performer.actor = Reference(/practitioner-profesionalodontologodrajuliaescenario1)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(/condition-hallazgoodontologico-juanodontopediatria-higieneoraldeficiente)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13047OF "Diente incisivo central inferior izquierdo temporal completo"
