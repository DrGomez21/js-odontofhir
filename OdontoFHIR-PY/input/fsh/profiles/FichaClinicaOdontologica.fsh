Alias: $paciente-odontologico = https://odontofhir.py/fhir/StructureDefinition/PacienteOdontologico
Alias: $odontologo = https://odontofhir.py/fhir/StructureDefinition/Odontologo
Alias: $encuentro-odontologico = https://odontofhir.py/fhir/StructureDefinition/EncuentroOdontologico
Alias: $hallazgos-odontologicos = https://odontofhir.py/fhir/StructureDefinition/HallazgosOdontologicos
Alias: $procedimiento-odontologico = https://odontofhir.py/fhir/StructureDefinition/ProcedimientoOdontologico
Alias: $alergias-odontologicas = https://odontofhir.py/fhir/StructureDefinition/AlergiasOdontologicas
Alias: $odontograma = https://odontofhir.py/fhir/StructureDefinition/Odontograma

Profile: FichaClinica
Parent: Composition
Id: ficha-clinica
Title: "Ficha Clínica Odontológica"
Description: "Contenedor de información clínica del paciente odontológico, incluyendo encuentros, hallazgos, procedimientos y alergias."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/FichaClinica"
* ^version = "1.0.0"
* ^status = #draft
* ^publisher = "OdontoFHIR-PY"
* ^contact.name = "Equipo de OdontoFHIR Paraguay"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "odontofhir@py.org"

// **Paciente**
* subject 1..1 MS only Reference($paciente-odontologico)
* subject ^short = "Paciente al que pertenece esta ficha clínica"

// **Autor de la Ficha Clínica (Odontólogo)**
* author 1..1 MS only Reference($odontologo)
* author ^short = "Odontólogo responsable de la ficha clínica"

// **Estado de la Ficha Clínica**
* status 1..1 MS
* status = #final
* status ^short = "Estado de la ficha clínica (final, en progreso, etc.)"

// **Fecha de Creación**
* date 1..1 MS
* date ^short = "Fecha de creación de la ficha clínica"

// **Tipo de Documento**
* type 1..1 MS
* type.text = "Ficha Clínica Odontológica"
* type ^short = "Tipo de documento clínico"

// **Secciones de la Ficha Clínica**
* section 1..* MS
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section contains 
    antecedentes 0..1 MS and
    encuentros 1..* MS and
    procedimientos 0..* MS and
    hallazgos 0..* MS and
    alergias 0..1 MS and
    odontograma 0..1 MS

// **Sección de Encuentros Odontológicos**
* section[encuentros].code = http://loinc.org#46242-1 "Encuentros Odontológicos"
* section[encuentros].entry 1..* MS only Reference($encuentro-odontologico)
* section[encuentros] ^short = "Lista de encuentros odontológicos"

// **Sección de Procedimientos Odontológicos**
* section[procedimientos].code = http://loinc.org#29554-3 "Procedimientos Odontológicos"
* section[procedimientos].entry 0..* MS only Reference($procedimiento-odontologico)
* section[procedimientos] ^short = "Lista de procedimientos realizados"

// **Sección de Hallazgos Odontológicos**
* section[hallazgos].code = http://loinc.org#75323-6 "Hallazgos Odontológicos"
* section[hallazgos].entry 0..* MS only Reference($hallazgos-odontologicos)
* section[hallazgos] ^short = "Lista de hallazgos clínicos identificados"

// **Sección de Alergias**
* section[alergias].code = http://loinc.org#48765-2 "Alergias e Intolerancias"
* section[alergias].entry 0..1 MS only Reference($alergias-odontologicas)
* section[alergias] ^short = "Registro de alergias e intolerancias"

// **Sección del Odontograma**
* section[odontograma].code = http://loinc.org#86129-3 "Odontograma"
* section[odontograma].entry 0..1 MS only Reference($odontograma)
* section[odontograma] ^short = "Registro visual del estado dental del paciente"

// **Notas Generales de la Ficha Clínica**
* note 0..* MS
* note.text 1..1 MS
* note ^short = "Notas generales de la ficha clínica"
