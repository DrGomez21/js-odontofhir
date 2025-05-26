Instance: FichaClinica-JuanOrtodoncia-1
InstanceOf: OdontoFHIR-FichaClinica-Composition-1
Title: "Ficha Clínica de Juan Sanchez - Etapa de Ortodoncia"
Description: "Ficha clínica que agrupa los encuentros, hallazgos, procedimientos y alergias registrados para Juan durante su atención odontopediátrica."

* status = #final

* type = #document


* subject = Reference(PacienteJuanSanchezEscenario1)
* author = Reference(ProfesionalOdontologoDrLeandroEscenario1)
* date = "2011-05-22T10:00:00-03:00"
* title = "Ficha Clínica de Ortodoncia - Juan Sanchez"

// Encuentros
* section[encuentros].title = "Encuentros Odontológicos"
* section[encuentros].entry[0] = Reference(ConsultaOdontologica-JuanOrtodoncia-1)
* section[encuentros].entry[1] = Reference(ConsultaOdontologica-JuanOrtodoncia-2)
* section[encuentros].entry[2] = Reference(ConsultaOdontologica-JuanOrtodoncia-3)

// Procedimientos
* section[procedimientos].title = "Procedimientos"
* section[procedimientos].entry[0] = Reference(ProcedimientoOdontologico-JuanOrtodoncia-TratamientoOrtodoncia)
* section[procedimientos].entry[1] = Reference(ProcedimientoOdontologico-JuanOrtodoncia-ColocacionBrackets)

// Hallazgos
* section[hallazgos].title = "Hallazgos Clínicos"
* section[hallazgos].entry[0] = Reference(HallazgoOdontologico-JuanOrtodoncia-DolorATM)
* section[hallazgos].entry[1] = Reference(HallazgoOdontologico-JuanOrtodoncia-Maloclusion)


