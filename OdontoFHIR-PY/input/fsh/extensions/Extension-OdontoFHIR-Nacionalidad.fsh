Extension: ExtensionOdontoFHIRNacionalidad
Id: Extension-OdontoFHIR-Nacionalidad
Title: "Nacionalidad del paciente"
Description: "Extensión que indica la nacionalidad del paciente."


* ^url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad"
* ^publisher = "OdontoFHIR Paraguay"


* value[x] only CodeableConcept
* valueCodeableConcept from $VSNacionalidad (extensible)