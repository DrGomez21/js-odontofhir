Instance: EncuentroGlobalSmileJuan
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Encuentro Odontológico – Global Smile (Extranjero)"
Description: "Consulta por dolor agudo en premolar superior derecho. Se diagnostica absceso periapical y se realiza tratamiento de conducto."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"
* subject = Reference(Patient/JuanSanchez)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(Practitioner/DraErika) 
* participant[0].individual.display = "Doctora Erika"

* period.start = "2023-04-15T09:00:00-03:00"
* period.end = "2023-04-15T10:00:00-03:00"

// Hallazgos
* diagnosis[0].condition = Reference(condition/)
* diagnosis[1].condition = Reference(condition/)

// Procedimiento realizado
* reasonReference[procedimiento][0] = Reference(Procedure/)
