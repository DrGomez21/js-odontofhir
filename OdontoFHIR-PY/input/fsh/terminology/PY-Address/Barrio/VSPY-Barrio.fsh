Alias: $CSPY-Barrio = https://odontofhir.py/fhir/CodeSystem/CSPY-Barrio
//Declaration
ValueSet: VSPY-Barrio
//Keywords
Id: VSPY-Barrio
Title: "Barrios en Paraguay"
Description: "Lista de barrios oficiales en Paraguay organizados por ciudad."
* ^url = "https://odontofhir.py/fhir/ValueSet/VSPY-Barrio"
* ^status = #active
//Rules
* include codes from system $CSPY-Barrio
