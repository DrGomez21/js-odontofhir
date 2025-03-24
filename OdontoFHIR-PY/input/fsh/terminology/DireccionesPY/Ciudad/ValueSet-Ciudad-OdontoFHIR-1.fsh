Alias: $CSPY-Ciudad = https://odontofhir.py/fhir/CodeSystem/Ciudad-OdontoFHIR-1
//Declaration
ValueSet: Ciudad-OdontoFHIR-1
//Keywords
Id: Ciudad-OdontoFHIR-1
Title: "Ciudades en Paraguay"
Description: "Lista de ciudades en Paraguay organizadas por departamento."
* ^url = "https://odontofhir.py/fhir/ValueSet/Ciudad-OdontoFHIR-1"
* ^status = #active
//Rules
* include codes from system $CSPY-Ciudad
