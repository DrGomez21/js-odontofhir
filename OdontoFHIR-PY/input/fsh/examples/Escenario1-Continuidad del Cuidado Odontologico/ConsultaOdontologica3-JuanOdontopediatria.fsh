Instance: ConsultaOdontologica-JuanOdontopediatria-3
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Consulta Odontologica 3 – Control mensual para luego pasar a semestral"
Description: "Control posterior. Se observa mejoría significativa. Se indica seguimiento semestral."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(/practitioner-profesionalodontologodrajuliaescenario1) 
* participant[0].individual.display = "Doctora Julia"

* period.start = "2011-10-15T09:00:00-03:00"
* period.end = "2011-10-15T10:00:00-03:00"
