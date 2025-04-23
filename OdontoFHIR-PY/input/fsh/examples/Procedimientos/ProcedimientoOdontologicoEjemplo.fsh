Instance: ProcedimientoCoronaMetalicaEjemplo

InstanceOf: OdontoFHIR-ProcedimientoOdontologico-Procedure-1
Title: "Procedimiento de colocación de corona metálica"
Description: "Colocación de una corona metálica sobre el tercer molar inferior izquierdo permanente. Procedimiento completado sin referencia a hallazgos."

* status = #completed

* code = https://odontofhir.py/fhir/CodeSystem/ProcedimientoOdontologico-OdontoFHIR-1#14005OF "Restauración de diente mediante corona dental metálica"

* subject = Reference(Patient/24)
* subject.display = "Paciente Universitario ejemplo"

* encounter = Reference(Encounter/1804)
* encounter.display = "Consulta para procedimiento de restauración"

* performedDateTime = "2025-04-21T09:30:00-03:00"

* performer[0].actor = Reference(Practitioner/23)
* performer[0].actor.display = "Odontólogo ejemplo"

* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13017OF "Tercer molar inferior izquierdo permanente completo"
