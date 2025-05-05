Instance: ConditionApinamientoJuanEOrt
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Apiñamiento dental"
Description: "Se detecta apiñamiento dental en arcada inferior."

* code = $VSHallazgosOdontologico#125605004 "Apiñamiento dental"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro1OrtodonciaJuan)
* recordedDate = "2029-09-15"
* asserter = Reference(ProfesionalOdontologoDrLeandroEjemploEscenario2)
* bodySite[0] = $VSAnatomiaDental#13046OF "Diente incisivo lateral inferior izquierdo temporal completo"
* bodySite[1] = $VSAnatomiaDental#13049OF "Diente incisivo lateral inferior derecho temporal completo"
