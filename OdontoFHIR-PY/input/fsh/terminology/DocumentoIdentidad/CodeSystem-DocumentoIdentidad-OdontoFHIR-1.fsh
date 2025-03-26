// Declaración  
CodeSystem: CodeSystemDocumentoIdentidadOdontoFHIR1  

// Keywords  
Id: DocumentoIdentidad-OdontoFHIR-1  
Title: "Sistema de Códigos de Identificación en Paraguay"  
Description: "Código de identificación oficial en Paraguay, incluyendo Cédula de Identidad y Pasaporte."  
* ^status = #active  
* ^url = "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1"
* ^content = #complete  
* ^caseSensitive = true  

// Códigos  
* #CI "Cédula de Identidad"  
  * ^definition = "Documento de identificación nacional obligatorio para ciudadanos paraguayos."
* #RPRO "Registro profesional"
  * ^definition = "Registro Profesional que identifica a los profesionales de la salud en Paraguay. Obligatorio para Odontólogos."
* #PAS "Pasaporte"  
  * ^definition = "Documento de viaje internacional válido para identificación de ciudadanos."  
* #NO "No tiene" 
  * ^definition = "El paciente no posee actualmente un documento de identidad válido, ya sea porque no lo ha tramitado o por su situación legal."  
* #UNK "No se conoce"
  * ^definition = "No se dispone de información sobre si el paciente posee o no un documento de identidad"  
