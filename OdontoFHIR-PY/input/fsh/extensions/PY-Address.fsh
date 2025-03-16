Alias: $VSPY-Departamento = https://odontofhir.py/fhir/ValueSet/VSPY-Departamento
Alias: $VSPY-Ciudad = https://odontofhir.py/fhir/ValueSet/VSPY-Ciudad
Alias: $VSPY-Barrio = https://odontofhir.py/fhir/ValueSet/VSPY-Barrio


// Declaración de la extensión PY-Address
Extension: PY-Address
Id: PY-Address
Title: "Dirección en Paraguay"
Description: "Extensión para direcciones en Paraguay, incluyendo Departamento, Ciudad, Barrio y Número de Casa."

* extension contains
    PY-Departamento named departamento 1..1 and
    PY-Ciudad named ciudad 1..1 and
    PY-Barrio named barrio 1..1 and
    DomicilioNumeroCasa named numeroCasa 0..1

* extension[departamento].value[x] only CodeableConcept
* extension[departamento].valueCodeableConcept from $VSPY-Departament (extensible)

* extension[ciudad].value[x] only CodeableConcept
* extension[ciudad].valueCodeableConcept from $VSPY-Ciudad (extensible)

* extension[barrio].value[x] only CodeableConcept
* extension[barrio].valueCodeableConcept from $VSPY-Barrio (extensible)

* extension[numeroCasa].value[x] only number
* extension[numeroCasa] ^short = "Número de Casa o Departamento"
* extension[numeroCasa] ^definition = "Número de la casa o departamento del paciente."
