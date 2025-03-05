// Declaración del Perfil de Address Personalizado para Paraguay
Profile: PY-Address
Parent: Address
Id: PY-Address
Title: "Dirección en Paraguay"
Description: "Estructura para representar direcciones en Paraguay, con códigos estandarizados de Ciudad, Barrio y Departamento."

// Slices en `extension` para los códigos geográficos
* extension contains 
    PY-Ciudad named ciudad 1..1 MS and
    PY-Barrio named barrio 1..1 MS and
    PY-Departamento named departamento 1..1 MS and
    Nationality named nacionalidad 1..1 MS

// Aplicar los ValueSets a los campos correspondientes
* extension[ciudad].value[x] only CodeableConcept
* extension[ciudad].valueCodeableConcept from terminology/PY-Ciudad (extensible)

* extension[barrio].value[x] only CodeableConcept
* extension[barrio].valueCodeableConcept from terminology/PY-Barrio (extensible)

* extension[departamento].value[x] only CodeableConcept
* extension[departamento].valueCodeableConcept from terminology/PY-Departamento (extensible)

* extension[nacionalidad].value[x] only CodeableConcept
* extension[nacionalidad].valueCodeableConcept from terminology/Nationality (extensible)

// Se mantienen los elementos básicos de Address
* use 0..1 MS
* use ^short = "Tipo de domicilio (home, work, temp, old)"

* line 0..* MS 
* line ^short = "Calle, número y depto"

* city 0..1 MS 
* city ^short = "Ciudad en texto libre"

* district 0..1 MS 
* district ^short = "Barrio en texto libre"

* state 0..1 MS 
* state ^short = "Departamento en texto libre"

* country 0..1 MS 
* country ^short = "País en texto libre"