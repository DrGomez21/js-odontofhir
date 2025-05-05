Instance: Encuentro3-JuanControl
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico 3 – Control"
Description: "Control posterior. Se observa mejoría significativa. Se indica seguimiento semestral."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(Practitioner/DraJulia) 
* participant[0].individual.display = "Doctora Julia"

* period.start = "2011-06-15T09:00:00-03:00"
* period.end = "2011-06-15T10:00:00-03:00"


