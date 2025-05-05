Instance: Encuentro1-JuanOdontopediatria
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 1 – Juan (Odontopediatría)"
Description: "Consulta inicial por sangrado de encías y mal aliento. Se registran hallazgos clínicos sin procedimientos en esta fase."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"


* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(Practitioner/DraJulia) 
* participant[0].individual.display = "Doctora Julia"

* period.start = "2011-05-22T09:00:00-03:00"
* period.end = "2011-05-22T10:00:00-03:00"

// Hallazgos clínicos registrados
* diagnosis[0].condition = Reference(Condition/)
* diagnosis[1].condition = Reference(Condition/)
* diagnosis[2].condition = Reference(Condition/)
* diagnosis[3].condition = Reference(Condition/)
