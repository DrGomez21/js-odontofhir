Instance: ActualizarConsultaOdontologicaConProcedimientoEjemplo 


InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1  
Title: "Consulta Odontológica de control, terminado el procedimiento"
Description: "Consulta odontológica con un procedimiento"

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"

* subject = Reference(Patient/24)
* subject.display = "Paciente Universitario ejemplo"

* participant[0].individual = Reference(Practitioner/23) //Entender mejor esta parte, de porque el .individual
* participant[0].individual.display = "Odontólogo ejemplo"

* reasonReference[procedimiento] = Reference(Procedure/1805)


* period.start = "2025-04-23T09:00:00-03:00"
* period.end = "2025-04-23T10:00:00-03:00"