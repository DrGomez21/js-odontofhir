Alias: $CodeSystem-Barrio-OdontoFHIR-1 = https://odontofhir.py/fhir/CodeSystem/Barrio-OdontoFHIR-1

// Declaration
ValueSet: ValueSetBarrioOdontoFHIR1

// Keywords
Id: ValueSetBarrioOdontoFHIR1
Title: "Barrios en Paraguay"
Description: "Lista de barrios oficiales en Paraguay organizados por ciudad."
* ^url = "https://odontofhir.py/fhir/ValueSet/Barrio-OdontoFHIR-1"
* ^status = #active

// Rules
* include codes from system $CodeSystem-Barrio-OdontoFHIR-1
