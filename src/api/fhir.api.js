import axios from "axios";

export const odontoFhirApi = axios.create({
  baseURL: import.meta.env.VITE_FHIR_SERVER_BASE_URL,
  params: {
    _format: 'json',
    _pretty: true
  }
})

export const deletePatientById = async (PatientId) => {
  const response = await axios.delete(`${PATIENT_BASE_URL}/${PatientId}/`)
  return response.data
}
