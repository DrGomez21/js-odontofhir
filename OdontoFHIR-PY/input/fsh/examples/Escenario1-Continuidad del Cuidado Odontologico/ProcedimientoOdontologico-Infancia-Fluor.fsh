Instance: ProcedimientoOdontologico-JuanOdontopediatria-Fluor
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Procedimiento Odontologico: Aplicación de flúor en paciente pediatrico"

Description: "Aplicación tópica de flúor para fortalecimiento del esmalte dental."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14014OF "Aplicación de flúor"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(/encounter-consultaodontologica-juanodontopediatria-2)
* performedDateTime = "2011-06-15T09:00:00-03:00"
* performer.actor = Reference(/practitioner-profesionalodontologodrajuliaescenario1)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(/condition-hallazgoodontologico-juanodontopediatria-inflamaciongingival)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13049OF "Diente incisivo lateral inferior derecho temporal completo"
