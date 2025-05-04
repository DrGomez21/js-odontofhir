Instance: ConditionSarroJuanE1
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Sarro en paciente pediátrico"
Description: "Acumulación de sarro detectada durante el primer encuentro de Juan."

* code = $CodigoHallazgosOdontoFHIR#13001OF "Acumulación de sarro"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro1-JuanOdontopediatria)
* recordedDate = "2025-04-22"
* asserter = Reference(ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1)
* bodySite[0] = $VSAnatomiaDental#13046OF "Diente incisivo lateral inferior izquierdo temporal completo"
* bodySite[1] = $VSAnatomiaDental#13047OF "Diente incisivo central inferior izquierdo temporal completo"
