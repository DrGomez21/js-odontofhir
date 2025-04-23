Instance: ConsultaConDosPerfiles 


InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1  
Title: "Consulta Odontológica de control, terminado el procedimiento y un hallazgo"
Description: "Consulta odontológica con un procedimiento y un hallazgo"

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(Patient/24)
* subject.display = "Paciente Universitario ejemplo"

* participant[0].individual = Reference(Practitioner/23) //Entender mejor esta parte, de porque el .individual
* participant[0].individual.display = "Odontólogo ejemplo"

* diagnosis[0].condition = Reference(Condition/1803)

* reasonReference[procedimiento] = Reference(Procedure/1805)


* period.start = "2025-04-03T09:00:00-03:00"
* period.end = "2025-04-03T10:00:00-03:00"