Instance: ConditionInflamacionGingivalJuanE1
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Inflamación Gingival en paciente pediátrico"
Description: "Inflamación gingival detectada durante el primer encuentro de Juan."

* code = $CodigoHallazgosOdontoFHIR#13002OF "Inflamación gingival"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro1-JuanOdontopediatria)
* recordedDate = "2025-04-22"
* asserter = Reference(ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1)
* bodySite[0] = $VSAnatomiaDental#13048OF "Diente incisivo central inferior derecho temporal completo"
* bodySite[1] = $VSAnatomiaDental#13049OF "Diente incisivo lateral inferior derecho temporal completo"
