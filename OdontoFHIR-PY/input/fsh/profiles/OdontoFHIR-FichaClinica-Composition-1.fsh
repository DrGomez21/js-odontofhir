Profile: OdontoFHIRFichaClinicaComposition1  
Parent: Composition
Id: OdontoFHIR-FichaClinica-Composition-1
Title: "Ficha Clínica Odontológica"
Description: "Contenedor de información clínica del paciente odontológico, incluyendo encuentros, hallazgos, procedimientos y alergias."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-FichaClinica-Composition-1"

* subject and author and date and section MS
// **Paciente**
* subject 1..1 
* subject only Reference($PacienteOdontologico)
* subject ^short = "Paciente al que pertenece esta ficha clínica"

// Autor de la Ficha Clínica (Odontólogo)
* author 1..1
* author only Reference($ProfesionalOdontologico)
* author ^short = "Odontólogo responsable de la ficha clínica"

// **Fecha de Creación**
* date 1..1
* date ^short = "Fecha de creación de la ficha clínica"

// **Secciones de la Ficha Clínica**
* section 1..*
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section contains 
    encuentros 1..* and
    procedimientos 0..* and
    hallazgos 0..* and
    alergias 0..1

// Sección de Encuentros Odontológicos
* section[encuentros].code = http://loinc.org#67781-5 "Resumen del encunetor lgmt es este codigo"
* section[encuentros] MS
* section[encuentros].entry 1..*
* section[encuentros].entry only Reference($EncuentroOdontologico)
* section[encuentros] ^short = "Lista de encuentros odontológicos"

// **Sección de Procedimientos Odontológicos**
* section[procedimientos].code = http://loinc.org#29554-3 "Procedimientos Odontológicos"
* section[procedimientos].entry 0..*
* section[procedimientos].entry MS
* section[procedimientos].entry only Reference($ProcedimientoOdontologico)
* section[procedimientos] ^short = "Lista de procedimientos realizados"

// **Sección de Hallazgos Odontológicos**
* section[hallazgos].code = http://loinc.org#75323-6 "Hallazgos Odontológicos"
* section[hallazgos].entry 0..*
* section[hallazgos].entry MS
* section[hallazgos].entry only Reference($HallazgosOdontologicos)
* section[hallazgos] ^short = "Lista de hallazgos clínicos identificados"

// **Sección de Alergias**
* section[alergias].code = http://loinc.org#48765-2 "Alergias e Intolerancias"
* section[alergias].entry 0..1
* section[alergias].entry MS
* section[alergias].entry only Reference($AllergyIntolerance)
* section[alergias] ^short = "Registro de alergias e intolerancias"

* section contains notasGenerales 0..1
* section[notasGenerales].code = http://loinc.org#86482-5 "Notas generales del documento"
* section[notasGenerales].entry only Reference(Observation)
* section[notasGenerales].entry ^short = "Notas generales registradas en el contexto clínico"
