// Declaración  
CodeSystem: CSPY-DocumentoIdentidad  

// Keywords  
Id: CSPY-DocumentoIdentidad  
Title: "Sistema de Códigos de Identificación en Paraguay"  
Description: "Código de identificación oficial en Paraguay, incluyendo Cédula de Identidad y Pasaporte."  
* ^status = #active  
* ^url = "https://odontofhir.py/fhir/CodeSystem/CSPY-DocumentoIdentidad"
* ^content = #complete  
* ^caseSensitive = true  

// Códigos  
* #1 "Cédula de Identidad"  
  * ^definition = "Documento de identificación nacional obligatorio para ciudadanos paraguayos."  
* #2 "Pasaporte"  
  * ^definition = "Documento de viaje internacional válido para identificación de ciudadanos."  
* #3 "No tiene" 
  * ^definition = "El paciente no posee actualmente un documento de identidad válido, ya sea porque no lo ha tramitado o por su situación legal."  
* #4 "No se conoce"
  * ^definition = "No se dispone de información sobre si el paciente posee o no un documento de identidad"  

