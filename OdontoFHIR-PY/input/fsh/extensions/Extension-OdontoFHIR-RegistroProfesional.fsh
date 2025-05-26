Extension: ExtensionOdontoFHIRRegistroProfesional
Id: Extension-OdontoFHIR-RegistroProfesional
Title: "Registro Profesional del Odontólogo"
Description: "Número de Registro Profesional obligatorio para ejercer como odontólogo en Paraguay."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-RegistroProfesional"
* ^context.type = #element
* ^context.expression = "Practitioner"

* value[x] only Identifier

* valueIdentifier.system 1..1
* valueIdentifier.system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* valueIdentifier.system ^short = "Sistema que identifica el tipo de documento"

* valueIdentifier.type 1..1
* valueIdentifier.type ^short = "Tipo de documento que debe ser #RPRO"
* valueIdentifier.type from $VSDocumentoIdentidad (required)
* valueIdentifier.type ^patternCodeableConcept.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* valueIdentifier.type ^patternCodeableConcept.coding[0].code = #RPRO

* valueIdentifier.value 1..1
* valueIdentifier.value ^short = "Número del Registro Profesional"
* valueIdentifier.value ^definition = "Código asignado por la entidad reguladora odontológica en Paraguay."

