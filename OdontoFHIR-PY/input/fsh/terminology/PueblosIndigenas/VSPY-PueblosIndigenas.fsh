Alias: $CSPY_Identidad = https://odontofhir.py/fhir/CodeSystem/CSPY-DocumentoIdentidad

// Declaración  
ValueSet: VSPY-DocumentoIdentidad  

// Keywords  
Id: PY-DocumentoIdentidad  
Title: "Conjunto de Valores para identificador del paciente odontológico"  
Description: "Lista de identificadores permitidos para pacientes odontológicos en Paraguay."  
* ^status = #active  

// Reglas  
* include codes from system $CSPY_Identidad
