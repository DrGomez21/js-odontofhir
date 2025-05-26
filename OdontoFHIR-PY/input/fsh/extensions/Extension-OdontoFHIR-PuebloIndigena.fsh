// Declaración de la extensión
Extension: ExtensionOdontoFHIRPueblosIndigenas
Id: Extension-OdontoFHIR-PueblosIndigenas
Title: "Pertenencia a pueblo indígena"
Description: "Indica si el paciente pertenece a un pueblo indígena."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-PueblosIndigenas"

* value[x] only CodeableConcept
* valueCodeableConcept from $VSPueblosIndigenas (extensible)