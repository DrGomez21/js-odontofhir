Instance: FichaClinicaPaciente24
InstanceOf: OdontoFHIR-FichaClinica-Composition-1
Title: "Ficha Clínica Odontológica del Paciente 24"
Description: "Ficha clínica completa del paciente universitario con encuentros, hallazgo, procedimiento y alergia registrados."

//Constraint propios
* status = #final

* type.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1"
* type.coding[0].code = #15000OF
* type.coding[0].display = "Ficha clínica odontológica"
* title = "Ficha clínica odontológica del paciente"

* title = "Ficha Clinica de Ejemplo"
* subject = Reference(Patient/24)
* author = Reference(Practitioner/23)
* date = "2025-04-23T21:24:43-04:00"

// Sección: Encuentros
* section[encuentros].code = https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1#15001OF "Encuentros Odontológicos"
* section[encuentros].entry[0] = Reference(Encounter/1802)
* section[encuentros].entry[1] = Reference(Encounter/1853)
* section[encuentros].entry[2] = Reference(Encounter/1855)

// Sección: Procedimientos
* section[procedimientos].code = https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1#15002OF "Procedimientos Odontológicos"
* section[procedimientos].entry[0] = Reference(Procedure/1854)

// Sección: Hallazgos
* section[hallazgos].code = https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1#15003OF "Hallazgos Odontológicos"
* section[hallazgos].entry[0] = Reference(Condition/1803)

// Sección: Alergias
* section[alergias].code = https://odontofhir.py/fhir/CodeSystem/SeccionesFichaClinica-OdontoFHIR-1#15004OF "Alergias e Intolerancias"
* section[alergias].entry = Reference(AllergyIntolerance/26)
