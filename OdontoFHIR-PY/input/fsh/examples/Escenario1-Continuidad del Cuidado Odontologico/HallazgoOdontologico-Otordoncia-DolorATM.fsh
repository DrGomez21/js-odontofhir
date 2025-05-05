Instance: ConditionDolorATMJuanEOrt
InstanceOf: OdontoFHIR-HallazgosOdontologicos-Condition-1
Title: "Hallazgo: Dolor en articulación temporomandibular"
Description: "Paciente refiere dolor leve en la ATM durante la consulta."

* code = $VSHallazgosOdontologico#247373008 "Dolor en articulación temporomandibular"
* subject = Reference(PacienteJuanEjemploEscenario1)
* encounter = Reference(Encuentro1OrtodonciaJuan)
* recordedDate = "2029-09-15"
* asserter = Reference(ProfesionalOdontologoDrLeandroEjemploEscenario2)
* bodySite[0] = $VSAnatomiaDental#13048OF "Diente incisivo central inferior derecho temporal completo"
