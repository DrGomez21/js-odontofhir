// Declaración  
CodeSystem: CodeSystemHallazgoOdontologicoFHIR1

// Keywords  
Id: HallazgoOdontologico-OdontoFHIR-1
Title: "Hallazgos Clínicos Odontológicos"
Description: "Listado de hallazgos odontológicos observados en consultas clínicas en Paraguay, mapeados con SNOMED y SNODENT cuando corresponde."
* ^url = "https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1"
* ^status = #active
* ^content = #complete
* ^caseSensitive = true
* ^version = "1.0.0"
* ^copyright = "OdontoFHIR Paraguay. Basado en SNOMED CT y SNODENT. Uso local no comercial autorizado."
* ^publisher = "OdontoFHIR Paraguay"

// Códigos
* #12001OF "Absceso"
  * ^definition = "Absceso dental u oral registrado en una consulta."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #128477000
  * ^property[1].code = #snodent
  * ^property[1].valueString = "123286D"

* #12002OF "Acumulación de sarro en dientes"
  * ^definition = "Acumulación de depósitos en dientes."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #6288001
  * ^property[1].code = #snodent
  * ^property[1].valueString = "127701D"

* #12003OF "Encías sangrantes"
  * ^definition = "Encías con sangrado durante o después de la exploración."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #86276007
  * ^property[1].code = #snodent
  * ^property[1].valueString = "142683D"

* #12004OF "Evaluación dental previa a trasplante, cirugía u otro tratamiento"
  * ^definition = "Evaluación odontológica previa a intervención médica mayor."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #110475006
  * ^property[1].code = #snodent
  * ^property[1].valueString = "146328D"

* #12005OF "Caries dental"
  * ^definition = "Presencia de caries dental activa."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #80967001
  * ^property[1].code = #snodent
  * ^property[1].valueString = "118065D"

* #12006OF "Diabetes"
  * ^definition = "Condición médica de diabetes mellitus informada o detectada."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #73211009
  * ^property[1].code = #snodent
  * ^property[1].valueString = "133643D"

* #12007OF "Alteraciones en la erupción dental"
  * ^definition = "Trastornos observados en la erupción de dientes."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #234972003
  * ^property[1].code = #snodent
  * ^property[1].valueString = "144684D"

* #12008OF "Boca seca (xerostomía)"
  * ^definition = "Sensación subjetiva de sequedad oral."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #87715008
  * ^property[1].code = #snodent
  * ^property[1].valueString = "138508D"

* #12009OF "Erosión dental por vómito persistente"
  * ^definition = "Erosión química del esmalte dental causada por vómito crónico."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #52031007
  * ^property[1].code = #snodent
  * ^property[1].valueString = "104212D"

* #12010OF "Evaluación de hinchazón o lesión para descartar cáncer oral"
  * ^definition = "Evaluación diagnóstica de masas o lesiones en cavidad oral."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #65124004
  * ^property[1].code = #snodent
  * ^property[1].valueString = "128015D"

* #12011OF "Infección"
  * ^definition = "Presencia o sospecha de infección en el área odontológica."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #40733004
  * ^property[1].code = #snodent
  * ^property[1].valueString = "138169D"

* #12012OF "Higiene oral deficiente"
  * ^definition = "Presencia de placa bacteriana o sarro excesivo."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #110299009
  * ^property[1].code = #snodent
  * ^property[1].valueString = "140234D"

* #12013OF "Ausencia de atención dental reciente"
  * ^definition = "El paciente no consultó con un odontólogo en los últimos 12-18 meses."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #413313008
  * ^property[1].code = #snodent
  * ^property[1].valueString = "212130D"

* #12014OF "Maloclusión"
  * ^definition = "Alteración en la alineación de los dientes."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #47944004
  * ^property[1].code = #snodent
  * ^property[1].valueString = "150365D"

* #12015OF "Lesión oral"
  * ^definition = "Lesión de tejidos blandos dentro de la cavidad bucal."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #1071000119107
  * ^property[1].code = #snodent
  * ^property[1].valueString = "180678D"

* #12016OF "Embarazo"
  * ^definition = "Paciente gestante, registrado en la historia clínica."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #77386006
  * ^property[1].code = #snodent
  * ^property[1].valueString = "174950D"

* #12017OF "Encías doloridas"
  * ^definition = "Sensación de dolor localizada en encías."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #11114002
  * ^property[1].code = #snodent
  * ^property[1].valueString = "104458D"

* #12018OF "Encías inflamadas"
  * ^definition = "Aumento de volumen o enrojecimiento en encías."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #309685001
  * ^property[1].code = #snodent
  * ^property[1].valueString = "148393D"

* #12019OF "Dolor de la articulación temporomandibular"
  * ^definition = "Dolor al movimiento en la articulación temporomandibular."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #298376001
  * ^property[1].code = #snodent
  * ^property[1].valueString = "167337D"

* #12020OF "Anomalías dentales"
  * ^definition = "Presencia de erosión o desgaste excesivo de dientes."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #82212003
  * ^property[1].code = #snodent
  * ^property[1].valueString = "135988D"

* #12021OF "Dolor de diente"
  * ^definition = "Dolor espontáneo o provocado en uno o más dientes."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #27355003
  * ^property[1].code = #snodent
  * ^property[1].valueString = "131687D"

* #12022OF "Trauma dental"
  * ^definition = "Lesión traumática en uno o más dientes."
  * ^property[0].code = #snomed
  * ^property[0].valueCode = #397869004
  * ^property[1].code = #snodent
  * ^property[1].valueString = "128117D"
