Alias: $CSPY-RelacionTutor = https://odontofhir.py/fhir/CodeSystem/CSPY-RelacionTutor

// Declaración  
ValueSet: VSPY-RelacionTutor  

// Keywords  
Id: VSPY-RelacionTutor  
Title: "Relaciones válidas para Tutor Legal"  
Description: "Lista de relaciones permitidas entre un paciente menor de edad y su tutor legal en odontología paraguaya."  
* ^url = "https://odontofhir.py/fhir/ValueSet/VSPY-RelacionTutor" 
* ^status = #active  

// Reglas  
* include codes from system $CSPY-RelacionTutor
