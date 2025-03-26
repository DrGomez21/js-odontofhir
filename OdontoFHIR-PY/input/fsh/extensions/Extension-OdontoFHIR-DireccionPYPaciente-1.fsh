Alias: $VSDepartamento = https://odontofhir.py/fhir/ValueSet/Departamento-OdontoFHIR-1
Alias: $VSCiudad = https://odontofhir.py/fhir/ValueSet/Ciudad-OdontoFHIR-1
Alias: $VSBarrio = https://odontofhir.py/fhir/ValueSet/Barrio-OdontoFHIR-1

// Declaración de la extensión DireccionDomicilioPaciente
Extension: ExtensionOdontoFHIRDireccionPYPaciente1
Id: Extension-OdontoFHIR-DireccionPYPaciente-1
Title: "Dirección en Paraguay"
Description: "Extensión para direcciones en Paraguay, incluyendo Departamento, Ciudad, Barrio y Número de Casa."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-DireccionPYPaciente-1"


* extension contains
    Departamento named departamento 1..1 and
    Ciudad named ciudad 1..1 and
    Barrio named barrio 1..1 and
    DomicilioNumeroCasa named numeroCasa 0..1

* extension[departamento].value[x] only CodeableConcept
* extension[departamento].valueCodeableConcept from $VSDepartamento (extensible)

* extension[ciudad].value[x] only CodeableConcept
* extension[ciudad].valueCodeableConcept from $VSCiudad (extensible)

* extension[barrio].value[x] only CodeableConcept
* extension[barrio].valueCodeableConcept from $VSBarrio (extensible)

* extension[numeroCasa].value[x] only number
* extension[numeroCasa] ^short = "Número de Casa o Departamento"
* extension[numeroCasa] ^definition = "Número de la casa o departamento del paciente."
