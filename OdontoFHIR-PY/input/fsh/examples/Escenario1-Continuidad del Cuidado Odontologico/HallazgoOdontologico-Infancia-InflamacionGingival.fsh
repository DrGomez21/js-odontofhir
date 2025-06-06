Instance: HallazgoOdontologico-JuanOdontopediatria-InflamacionGingival
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Observation-1
Title: "Hallazgo Odontológico - Inflamación Gingival (diente 13048)"
Description: "Inflamación gingival detectada en Juan, afectando el incisivo central inferior derecho temporal completo."

* status = #final
* code = https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1#12018OF "Encías inflamadas"
* subject = Reference(Patient/patient-pacientejuansanchezescenario1)
* encounter = Reference(Encounter/encounter-consultaodontologica-juanodontopediatria-1)
* effectiveDateTime = "2011-05-22"
* performer = Reference(Practitioner/practitioner-profesionalodontologodrajuliaescenario1)
* bodySite = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"

