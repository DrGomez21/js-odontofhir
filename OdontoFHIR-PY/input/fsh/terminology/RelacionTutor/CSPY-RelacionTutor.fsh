// Declaración  
CodeSystem: CSPY-RelacionTutor  

// Keywords  
Id: CSPY-RelacionTutor  
Title: "Relaciones entre paciente y tutor legal"  
Description: "Tipos de relaciones del niño con un tutor, optimizado para uso en odontología en Paraguay."  
* ^status = #active  
* ^url = "https://odontofhir.py/fhir/CodeSystem/CSPY-RelacionTutor"
* ^content = #complete  
* ^caseSensitive = true  

// Códigos  
* #PAD "Padre"  
  * ^definition = "El tutor legal del paciente es su padre biológico o adoptivo."  

* #MAD "Madre"  
  * ^definition = "El tutor legal del paciente es su madre biológica o adoptiva."  

* #GUARD "Tutor Legal"  
  * ^definition = "Persona que tiene responsabilidad legal sobre el paciente, pero no es padre ni madre."  

* #UNK "No se conoce"
  * ^definition = "No se dispone de información sobre si el paciente posee o no un tutor legal registrado."  
