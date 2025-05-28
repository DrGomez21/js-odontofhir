Instance: FichaClinica-JuanOdontopediatria-1
InstanceOf: OdontoFHIR-FichaClinica-Composition-1
Title: "Ficha Clínica de Juan Prueba - Etapa Odontopediátrica"
Description: "Ficha clínica que agrupa los encuentros, hallazgos, procedimientos y alergias registrados para Juan durante su atención odontopediátrica."

* status = #final

* type = #document


* subject = Reference(PacienteJuanSanchezEscenario1)
* author = Reference(ProfesionalOdontologoDraJuliaEscenario1)
* date = "2011-05-22T10:00:00-03:00"
* title = "Ficha Clínica Odontopediátrica - Juan Prueba"

// Encuentros
* section[encuentros].title = "Encuentros Odontológicos"
* section[encuentros].entry[0] = Reference(ConsultaOdontologica-JuanOdontopediatria-1)
* section[encuentros].entry[1] = Reference(ConsultaOdontologica-JuanOdontopediatria-2)
* section[encuentros].entry[2] = Reference(ConsultaOdontologica-JuanOdontopediatria-3)

// Procedimientos
* section[procedimientos].title = "Procedimientos"
* section[procedimientos].entry[0] = Reference(ProcedimientoOdontologico-JuanOdontopediatria-Profilaxis)
* section[procedimientos].entry[1] = Reference(ProcedimientoOdontologico-JuanOdontopediatria-Fluor)
* section[procedimientos].entry[2] = Reference(ProcedimientoOdontologico-JuanOdontopediatria-EducacionHigiene)

// Hallazgos
* section[hallazgos].title = "Hallazgos Clínicos"
* section[hallazgos].entry[0] = Reference(HallazgoOdontologico-JuanOdontopediatria-Sarro)
* section[hallazgos].entry[1] = Reference(HallazgoOdontologico-JuanOdontopediatria-InflamacionGingival)
* section[hallazgos].entry[2] = Reference(HallazgoOdontologico-JuanOdontopediatria-EnciasSangrantes)
* section[hallazgos].entry[3] = Reference(HallazgoOdontologico-JuanOdontopediatria-HigieneOralDeficienteDI)
* section[hallazgos].entry[4] = Reference(HallazgoOdontologico-JuanOdontopediatria-HigieneOralDeficienteDD)
