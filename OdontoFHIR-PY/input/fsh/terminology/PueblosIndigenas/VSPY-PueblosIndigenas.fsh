Alias: $CSPY-PueblosIndigenas = https://odontofhir.py/fhir/CodeSystem/CSPY-PueblosIndigenas

// Declaración  
ValueSet: VSPY-PueblosIndigenas  

// Keywords  
Id: VSPY-PueblosIndigenas  
Title: "Conjunto de Valores para identificar el pueblo originario del paciente"  
Description: "Lista de pueblos indígenas reconocidos en Paraguay según OdontoFHIR-PY."  
* ^url = "https://odontofhir.py/fhir/ValueSet/VSPY-PueblosIndigenas"
* ^status = #active  

// Reglas  
* include codes from system $CSPY-PueblosIndigenas
