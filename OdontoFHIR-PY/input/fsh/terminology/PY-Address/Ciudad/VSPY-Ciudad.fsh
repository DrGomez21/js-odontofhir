Alias: $CSPY-Ciudad = https://odontofhir.py/fhir/CodeSystem/CSPY-Ciudad
//Declaration
ValueSet: VSPY-Ciudad
//Keywords
Id: VSPY-Ciudad
Title: "Ciudades en Paraguay"
Description: "Lista de ciudades en Paraguay organizadas por departamento."
* ^url = "https://odontofhir.py/fhir/ValueSet/VSPY-Ciudad"
* ^status = #active
//Rules
* include codes from system $CSPY-Ciudad
