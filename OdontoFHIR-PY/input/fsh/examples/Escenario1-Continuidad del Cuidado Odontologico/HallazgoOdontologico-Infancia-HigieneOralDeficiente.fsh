Instance: ConditionHigieneOralDeficienteJuanE1
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Higiene oral deficiente en paciente pediátrico"
Description: "Se identificó higiene oral deficiente en Juan durante su primera consulta."

* code = $CodigoHallazgosOdontoFHIR#13004OF "Higiene oral deficiente"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro1-JuanOdontopediatria)
* recordedDate = "2025-04-22"
* asserter = Reference(ProfesionalOdontologoDraJuliaOdontoEjemploEscenario1)
* bodySite[0] = $VSAnatomiaDental#13047OF "Diente incisivo central inferior izquierdo temporal completo"
* bodySite[1] = $VSAnatomiaDental#13048OF "Diente incisivo central inferior derecho temporal completo"
