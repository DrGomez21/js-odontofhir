// Perfil del Bundle
Profile: OdontoFHIRExpedienteOdontologicoBundle1
Parent: Bundle
Id: OdontoFHIR-ExpedienteOdontologico-Bundle-1
Title: "Expediente Odontológico - Bundle"
Description: "Este perfil define cómo debe estructurarse un Bundle de tipo document que representa el expediente clínico odontológico completo, incluyendo paciente, profesional, encuentros, procedimientos, hallazgos y alergias."

* ^url = "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ExpedienteOdontologico-Bundle-1"

* identifier 1.. MS
* identifier ^short = "Identificador único del expediente"
* identifier ^definition = "Un identificador persistente y único para este bundle clínico."

* type = #document (exactly)
* type ^short = "Tipo de bundle: documento clínico"

* timestamp 1.. MS
* timestamp ^short = "Fecha de creación del expediente"
* timestamp ^definition = "Fecha y hora en que se ensambló este expediente clínico odontológico."

* entry 1.. MS
* entry ^short = "Recursos clínicos incluidos en el expediente"
* entry ^definition = "Cada entrada contiene un recurso FHIR que forma parte del expediente odontológico estructurado."

* entry.fullUrl MS
* entry.fullUrl ^short = "Identificador local del recurso"
* entry.fullUrl ^definition = "URI única para enlazar referencias internas dentro del bundle."

* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open

* entry contains
    ficha 1..1 and
    paciente 1..1 and
    odontologo 1..1 and
    encuentro 1..* and
    procedimientos 0..* and
    hallazgos 0..* and
    alergias 0..1

//Aca ya no usamos referencias sino directo el perfil creado, no usar mas reference
* entry[ficha].resource only $FichaClinica
* entry[ficha] ^short = "Documento Composition"
* entry[ficha] ^definition = "Documento clínico que organiza la información del expediente."

* entry[paciente].resource only $PacienteOdontologico
* entry[paciente] ^short = "Paciente"
* entry[paciente] ^definition = "Paciente odontológico al que pertenece este expediente."

* entry[odontologo].resource only $ProfesionalOdontologico
* entry[odontologo] ^short = "Profesional tratante"
* entry[odontologo] ^definition = "Odontólogo responsable de la atención clínica."

* entry[encuentro].resource only $EncuentroOdontologico
* entry[encuentro] ^short = "Encuentros clínicos"
* entry[encuentro] ^definition = "Encuentros odontológicos registrados en este expediente."

* entry[procedimientos].resource only $ProcedimientoOdontologico
* entry[procedimientos] ^short = "Procedimientos"
* entry[procedimientos] ^definition = "Procedimientos realizados o planificados durante los encuentros."

* entry[hallazgos].resource only $HallazgosOdontologicos
* entry[hallazgos] ^short = "Hallazgos clínicos"
* entry[hallazgos] ^definition = "Hallazgos observados durante la atención clínica odontológica."

* entry[alergias].resource only $AllergyIntolerance
* entry[alergias] ^short = "Alergias/intolerancias"
* entry[alergias] ^definition = "Registro de alergias relevantes del paciente, si existen."