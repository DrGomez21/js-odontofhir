Instance: ConditionSangradoEncíasJuanE1
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Sangrado de encías en paciente pediátrico"
Description: "Encías sangrantes observadas durante el primer encuentro de Juan."

* code = $CodigoHallazgosOdontoFHIR#13003OF "Encías sangrantes"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro1-JuanOdontopediatria)
* recordedDate = "2025-04-22"
* asserter = Reference(ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1)
* bodySite[0] = $VSAnatomiaDental#13050OF "Diente canino inferior derecho temporal completo"
* bodySite[1] = $VSAnatomiaDental#13051OF "Primer diente molar inferior derecho temporal completo"
