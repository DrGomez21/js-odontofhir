Alias: $CSPY-Departamento = https://odontofhir.py/fhir/CodeSystem/Departamento-Odonto-FHIR-1
// Declaración
ValueSet: DepartamentoOdontoFHIR1

// Keywords  
Id: DepartamentoOdontoFHIR1
Title: "Departamentos de Paraguay"
Description: "Lista de departamentos oficiales de Paraguay."
* ^url = "https://odontofhir.py/fhir/ValueSet/Departamento-Odonto-FHIR-1"
* ^status = #active

// Reglas
* include codes from system $CSPY-Departamento
CodeSystem-Ciudad-OdontoFHIR-1