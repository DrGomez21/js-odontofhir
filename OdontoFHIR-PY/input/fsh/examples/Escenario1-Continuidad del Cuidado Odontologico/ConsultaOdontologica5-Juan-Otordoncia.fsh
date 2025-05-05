Instance: Encuentro2OrtodonciaJuan
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 2 – Ortodoncia (Colocación)"
Description: "Encuentro para inicio de tratamiento ortodóntico con colocación de brackets."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(Practitioner/DraJulia) 
* participant[0].individual.display = "Doctora Julia"

* period.start = "2017-03-15T09:00:00-03:00"
* period.end = "2017-03-15T10:00:00-03:00"


// Procedimientos realizados
* reasonReference[procedimiento][0] = Reference(Procedure/)

