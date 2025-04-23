Instance: ActualizarConsultaOdontologicaConHallazgoEjemplo //Esto modificar en el JSON con la ID del Encounter 

InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1  
Title: "Consulta Odontológica de control, que queda abierta"
Description: "Consulta odontológica sin hallazgos ni procedimientos registrados aún."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(Patient/24)
* subject.display = "Paciente Universitario ejemplo"

* participant[0].individual = Reference(Practitioner/23) //Entender mejor esta parte, de porque el .individual
* participant[0].individual.display = "Odontólogo ejemplo"

* diagnosis[0].condition = Reference(Condition/1803)

* period.start = "2025-04-20T09:00:00-03:00"
* period.end = "2025-04-20T10:00:00-03:00"