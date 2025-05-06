Instance: Encuentro3OrtodonciaRefaccionJuan
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 3 – Ortodoncia (Reparación de brackets)"
Description: "Consulta por desprendimiento de brackets. Se realiza reparación y control."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(Practitioner/DrLeandro) 
* participant[0].individual.display = "Doctora Leandro"

* period.start = "2017-06-15T09:00:00-03:00"
* period.end = "2017-06-15T10:00:00-03:00"

// Procedimiento asociado
* reasonReference[procedimiento][0] = Reference(Procedure/)
