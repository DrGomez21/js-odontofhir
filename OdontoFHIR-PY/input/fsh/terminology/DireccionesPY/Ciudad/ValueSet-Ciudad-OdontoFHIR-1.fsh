//Declaration
ValueSet: ValueSetCiudadOdontoFHIR1
//Keywords
Id: Ciudad-OdontoFHIR-1
Title: "Ciudades en Paraguay"
Description: "Lista de ciudades en Paraguay organizadas por departamento."
* ^url = "https://odontofhir.py/fhir/ValueSet/Ciudad-OdontoFHIR-1"
* ^status = #active
* ^publisher = "OdontoFHIR Paraguay"

//Rules
* include codes from system $CSPY-Ciudad
