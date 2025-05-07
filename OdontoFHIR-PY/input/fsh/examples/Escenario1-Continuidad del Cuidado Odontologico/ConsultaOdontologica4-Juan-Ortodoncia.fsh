Instance: ConsultaOdontologica-JuanOrtodoncia-1
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Consulta Odontologica 1 – Adolescencia (Ortodoncia)"
Description: "Consulta por molestias al morder. Se diagnostica maloclusión Clase II, apiñamiento dental y dolor leve en ATM."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(/practitioner-profesionalodontologodrleandroescenario1) 
* participant[0].individual.display = "Doctora Leandro"

* period.start = "2017-02-22T09:00:00-03:00"
* period.end = "2017-02-22T10:00:00-03:00"

// Hallazgos clínicos registrados
* diagnosis[0].condition = Reference(/condition-hallazgoodontologico-juanortodoncia-doloratm)
* diagnosis[1].condition = Reference(/condition-hallazgoodontologico-juanortodoncia-maloclusion)
