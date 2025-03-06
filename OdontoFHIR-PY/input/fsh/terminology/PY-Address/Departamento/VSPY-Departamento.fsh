Alias: $CSPY-Departamento = https://odontofhir.py/fhir/CodeSystem/CSPY-Departamento
// Declaración
ValueSet: VSPY-Departamento

// Keywords  
Id: VSPY-Departamento
Title: "Departamentos de Paraguay"
Description: "Lista de departamentos oficiales de Paraguay."
* ^url = "https://odontofhir.py/fhir/ValueSet/VSPY-Departamento"
* ^status = #active

// Reglas
* include codes from system $CSPY-Departamento
