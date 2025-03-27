Alias: $VSPueblosIndigenas = https://odontofhir.py/fhir/ValueSet/PueblosIndigenas-OdontoFHIR-1

// Declaración de la extensión
Extension: ExtensionOdontoFHIPuebloIndigena
Id: Extension-OdontoFHIR-PuebloIndigena
Title: "Pertenencia a pueblo indígena"
Description: "Indica si el paciente pertenece a un pueblo indígena reconocido."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-PuebloIndigena"

* value[x] only CodeableConcept
* valueCodeableConcept from $VSPueblosIndigenas (extensible)
