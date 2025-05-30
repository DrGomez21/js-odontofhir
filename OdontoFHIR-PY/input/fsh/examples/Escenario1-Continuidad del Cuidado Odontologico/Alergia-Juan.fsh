Instance: AlergiaTetracaina-JuanSanchez
InstanceOf: OdontoFHIR-AlergiasIntolerancias-1

Title: "Alergia a Tetracaína - Juan Sánchez"
Description: "Registro de alergia a tetracaína en el paciente Juan Sánchez"

* clinicalStatus = #active
* type = #allergy

* code.coding[0].system = "https://odontofhir.py/fhir/CodeSystem/AlergiasIntolerancias-OdontoFHIR-1"
* code.coding[0].code = #15005OF
* code.coding[0].display = "Alergia a Tetracaína"

* code.text = "Alergia a Tetracaína"
* patient = Reference(PacienteJuanSanchezEscenario1)
