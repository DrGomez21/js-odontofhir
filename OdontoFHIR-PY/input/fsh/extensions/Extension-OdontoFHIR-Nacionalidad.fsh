Alias: $VSNationality = https://odontofhir.py/fhir/ValueSet/Nacionalidad-OdontoFHIR-1

Extension: ExtensionOdontoFHIRNacionalidad
Id: Extension-OdontoFHIR-Nacionalidad
Title: "Nacionalidad del paciente"
Description: "Extensión que indica la nacionalidad del paciente."


* ^url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad"

* value[x] only CodeableConcept
* valueCodeableConcept from $VSNationality (extensible)