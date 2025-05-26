Instance: ConsultaOdontologica-JuanOdontopediatria-1
InstanceOf: OdontoFHIR-ConsultaOdontologica-Encounter-1
Title: "Consulta Odontologica 1 – Juan (Odontopediatría)"
Description: "Consulta inicial por sangrado de encías y mal aliento. Se registran hallazgos clínicos para tratarlos en el siguiente encuentro."

* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB "ambulatory"


* subject = Reference(//patient-pacientejuansanchezescenario1)
* subject.display = "Paciente Juan Sanchez"

* participant[0].individual = Reference(//practitioner-profesionalodontologodrajuliaescenario1) 
* participant[0].individual.display = "Doctora Julia"

* period.start = "2011-05-22T09:00:00-03:00"
* period.end = "2011-05-22T10:00:00-03:00"

// Hallazgos clínicos registrados
* diagnosis[0].condition = Reference(/condition-hallazgoodontologico-juanodontopediatria-higieneoraldeficiente)
* diagnosis[1].condition = Reference(/condition-hallazgoodontologico-juanodontopediatria-inflamaciongingival)
* diagnosis[2].condition = Reference(/condition-hallazgoodontologico-juanodontopediatria-enciassangrantes)
* diagnosis[3].condition = Reference(/condition-hallazgoodontologico-juanodontopediatria-sarro)
