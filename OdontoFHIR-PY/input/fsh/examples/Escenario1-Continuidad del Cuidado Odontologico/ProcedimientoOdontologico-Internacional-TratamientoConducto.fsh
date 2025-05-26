Instance: ProcedimientoOdontologico-JuanInternacional-TratamientoConducto
InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Procedimiento Odontologico: Tratamiento de conducto en Juan durante consulta en el extranjero"
Description: "Procedimiento endodóntico para drenar absceso y preservar el diente."

* status = #completed
* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14012OF "Tratamiento de conducto"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"
* encounter = Reference(/encounter-consultaodontologica-juaninternacional-1)
* performedDateTime = "2023-04-15T09:00:00-03:00"
* performer.actor = Reference(/practitioner-profesionalodontologodrajuliaescenario1)
* performer[0].actor.display = "Doctora Julia"
* reasonReference[0] = Reference(/condition-hallazgoodontologico-juaninternacional-absceso)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13003OF "Primer molar superior derecho permanente completo"
