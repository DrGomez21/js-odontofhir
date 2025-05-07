Instance: ConsultaOdontologica-JuanInternacional-1
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Consulta Odontologica – Internacional"
Description: "Consulta por dolor agudo en premolar superior derecho. Se diagnostica absceso periapical y se realiza tratamiento de conducto."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(/patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(/practitioner-profesionalodontologodraerikaescenario1) 
* participant[0].individual.display = "Doctora Erika"

* period.start = "2023-04-15T09:00:00-03:00"
* period.end = "2023-04-15T10:00:00-03:00"

// Hallazgos
* diagnosis[0].condition = Reference(/condition-hallazgoodontologico-juaninternacional-dolordiente)
* diagnosis[1].condition = Reference(/condition-hallazgoodontologico-juaninternacional-absceso)

// Procedimiento realizado
* reasonReference[procedimiento][0] = Reference(/procedure-procedimientoodontologico-juaninternacional-tratamientoconducto)
