Instance: ConditionMaloclusionJuanEOrt
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Maloclusión Clase II"
Description: "Se diagnostica maloclusión Clase II como parte del examen ortodóntico."

* code = $VSHallazgosOdontologico#367336001 "Maloclusión dental"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro1OrtodonciaJuan)
* recordedDate = "2029-09-15"
* asserter = Reference(ProfesionalOdontologoDrLeandroEjemploEscenario2)
* bodySite[0] = $VSAnatomiaDental#13051OF "Primer diente molar inferior derecho temporal completo"
* bodySite[1] = $VSAnatomiaDental#13050OF "Diente canino inferior derecho temporal completo"

