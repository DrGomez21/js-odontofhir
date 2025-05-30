// Declaración de la extensión DireccionDomicilioPaciente
Extension: ExtensionOdontoFHIRDireccionPYPaciente1
Id: Extension-OdontoFHIR-DireccionPYPaciente-1
Title: "Dirección en Paraguay"
Description: "Extensión para direcciones en Paraguay, incluyendo Departamento, Ciudad, Barrio y Número de Casa."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-DireccionPYPaciente-1"
* ^publisher = "OdontoFHIR Paraguay"


// Subextensiones definidas
* extension contains
    departamento 1..1 and
    ciudad 1..1 and
    barrio 1..1 and
    numeroCasa 0..1

* extension[departamento].value[x] only CodeableConcept
* extension[departamento].valueCodeableConcept from $VSDepartamento (extensible)

* extension[ciudad].value[x] only CodeableConcept
* extension[ciudad].valueCodeableConcept from $VSCiudad (extensible)

* extension[barrio].value[x] only CodeableConcept
* extension[barrio].valueCodeableConcept from $VSBarrio (extensible)

* extension[numeroCasa].value[x] only integer
* extension[numeroCasa] ^short = "Número de Casa o Departamento"
* extension[numeroCasa] ^definition = "Número de la casa o departamento del paciente."
