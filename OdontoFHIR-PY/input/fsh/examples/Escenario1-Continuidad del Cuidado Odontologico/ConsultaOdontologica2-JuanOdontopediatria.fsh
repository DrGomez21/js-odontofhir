Instance: ConsultaOdontologica-JuanOdontopediatria

InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 2 – Juan (Procedimientos)"
Description: "Encuentro en el que se realiza profilaxis, aplicación de flúor y educación en higiene oral."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(Practitioner/DraJulia) 
* participant[0].individual.display = "Doctora Julia"

* period.start = "2011-06-15T09:00:00-03:00"
* period.end = "2011-06-15T10:00:00-03:00"


// Procedimientos realizados
* reasonReference[procedimiento][0] = Reference(Procedure/)
* reasonReference[procedimiento][1] = Reference(Procedure/)
* reasonReference[procedimiento][2] = Reference(Procedure/)

