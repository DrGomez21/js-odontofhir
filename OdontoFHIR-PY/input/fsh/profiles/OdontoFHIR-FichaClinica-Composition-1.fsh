Profile: OdontoFHIRFichaClinicaComposition1
Parent: Composition
Id: OdontoFHIR-FichaClinica-Composition-1
Title: "Ficha Clínica Odontológica"
Description: "Contenedor de información clínica del paciente odontológico, incluyendo encuentros, hallazgos, procedimientos y alergias."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-FichaClinica-Composition-1"
* ^publisher = "OdontoFHIR Paraguay"


// Must Support global
* subject and author and date and section MS

// Paciente
* subject 1..1
* subject only Reference($PacienteOdontologico)
* subject ^short = "Paciente al que pertenece esta ficha clínica"

// Autor (Odontólogo)
* author 1..1
* author only Reference($ProfesionalOdontologico)
* author ^short = "Odontólogo responsable de la ficha clínica"

// Fecha de creación
* date 1..1
* date ^short = "Fecha de creación de la ficha clínica"

// Secciones
* section 1..*
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section.code from VSFichaClinicaOdontoFHIR (required) // Binding al ValueSet

* section contains
    encuentros 1..* and
    procedimientos 0..* and
    hallazgos 0..* and
    alergias 0..1 


// Encuentros
* section[encuentros].code = https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1#15001OF "Encuentros Odontológicos"
* section[encuentros].entry 1..*
* section[encuentros].entry only Reference($EncuentroOdontologico)
* section[encuentros] ^short = "Lista de encuentros odontológicos"

// Procedimientos
* section[procedimientos].code = https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1#15002OF "Procedimientos Odontológicos"
* section[procedimientos].entry 0..*
* section[procedimientos].entry only Reference($ProcedimientoOdontologico)
* section[procedimientos] ^short = "Lista de procedimientos realizados"

// Hallazgos
* section[hallazgos].code = https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1#15003OF "Hallazgos Odontológicos"
* section[hallazgos].entry 0..*
* section[hallazgos].entry only Reference($HallazgosOdontologicos)
* section[hallazgos] ^short = "Lista de hallazgos clínicos identificados"

// Alergias
* section[alergias].code = https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1#15004OF "Alergias e Intolerancias"
* section[alergias].entry 0..1
* section[alergias].entry only Reference(AllergyIntolerance)
* section[alergias] ^short = "Registro de alergias e intolerancias"

/* Notas generales, debo crear un structure definition para Observation. FUTURO
* section[notasGenerales].entry 0..1
* section[notasGenerales].entry only Reference(Observation)
* section[notasGenerales] ^short = "Notas generales registradas en el contexto clínico"
*/