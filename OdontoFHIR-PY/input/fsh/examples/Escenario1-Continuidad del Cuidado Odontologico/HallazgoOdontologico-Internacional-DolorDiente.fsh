Instance: ConditionDolorDienteJuanEGlobal
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Dolor de diente superior"
Description: "Paciente refiere dolor agudo en premolar superior derecho."

* code = $VSHallazgosOdontologico#422587007 "Dolor de diente"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(EncuentroGlobalSmileJuan)
* recordedDate = "2033-03-11"
* asserter = Reference(ProfesionalOdontologoDraErikaEjemploEscenario3)
* bodySite = $VSAnatomiaDental#13051OF "Primer diente molar inferior derecho temporal completo"
