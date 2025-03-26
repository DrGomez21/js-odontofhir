Alias: $CSPueblosIndigenas = https://odontofhir.py/fhir/CodeSystem/PueblosIndigenas-OdontoFHIR-1

// Declaración  
ValueSet: PueblosIndigenasOdontoFHIR1  

// Keywords  
Id: PueblosIndigenas-OdontoFHIR-1  
Title: "Conjunto de Valores para identificar el pueblo originario del paciente"  
Description: "Lista de pueblos indígenas reconocidos en Paraguay según OdontoFHIR-PY."  
* ^url = "https://odontofhir.py/fhir/ValueSet/PueblosIndigenas-OdontoFHIR-1"
* ^status = #active  

// Reglas  
* include codes from system $CSPueblosIndigenas 