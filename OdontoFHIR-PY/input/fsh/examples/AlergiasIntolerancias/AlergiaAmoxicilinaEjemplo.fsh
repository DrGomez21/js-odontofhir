Instance: AlergiaAmoxicilinaPaciente53
InstanceOf: OdontoFHIR-AllergyIntolerance-1
Title: "Alergia a la Amoxicilina"
Description: "Paciente odontológico alérgico a Amoxicilina, registrada para control clínico."

* patient = Reference(Patient/53)
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active
* type = #allergy
* code = http://snomed.info/sct#294505008 "Alergia a amoxicilina (hallazgo)"
