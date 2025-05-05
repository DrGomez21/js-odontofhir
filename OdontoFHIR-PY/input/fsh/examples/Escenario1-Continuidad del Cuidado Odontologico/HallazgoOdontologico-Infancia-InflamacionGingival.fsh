Instance: ConditionInflamacionGingivalJuanE1
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Inflamación Gingival en paciente pediátrico"
Description: "Inflamación gingival detectada durante el primer encuentro de Juan."

* code = https://odontofhir.py/fhir/CodeSystem/Hallazgos-OdontoFHIR-1#12018OF "Encías inflamadas"
* subject = Reference(Patient/JuanSanchez)
* encounter = Reference(Encounter/infancia1)
* recordedDate = "2011-05-22"
* asserter = Reference(Practitioner/DraJulia)
* bodySite[0] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13048OF "Diente incisivo central inferior derecho temporal completo"
* bodySite[1] = https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1#13049OF "Diente incisivo lateral inferior derecho temporal completo"
