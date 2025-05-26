Instance: FichaClinica-JuanInternacional-1
InstanceOf: OdontoFHIR-FichaClinica-Composition-1
Title: "Ficha Clínica de Juan Sanchez - Internacional"
Description: "Ficha clínica que agrupa los encuentros, hallazgos, procedimientos y alergias registrados para Juan durante su atención odontopediátrica."

* status = #final

* type = #document


* subject = Reference(PacienteJuanSanchezEscenario1)
* author = Reference(ProfesionalOdontologoDraErikaEscenario1)
* date = "2023-05-22T10:00:00-03:00"
* title = "Ficha Clínica Internacional - Juan Sanchez"

// Encuentros
* section[encuentros].title = "Encuentros Odontológicos"
* section[encuentros].entry[0] = Reference(ConsultaOdontologica-JuanInternacional-1)

// Procedimientos
* section[procedimientos].title = "Procedimientos"
* section[procedimientos].entry[0] = Reference(ProcedimientoOdontologico-JuanInternacional-TratamientoConducto)

// Hallazgos
* section[hallazgos].title = "Hallazgos Clínicos"
* section[hallazgos].entry[0] = Reference(HallazgoOdontologico-JuanInternacional-DolorDiente)
* section[hallazgos].entry[1] = Reference(HallazgoOdontologico-JuanInternacional-Absceso)



