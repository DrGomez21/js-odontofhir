import axios from "axios";

const PATIENT_BASE_URL = 'http://localhost:8080/fhir/Patient/'

export const getAllPatients = async () => {
  const response = await axios.get(PATIENT_BASE_URL)
  return response.data
}

export const postPatient = async (newPatient) => {
  const response = await axios.post(PATIENT_BASE_URL, newPatient)
  return response
}

export const deletePatientById = async (PatientId) => {
  
}
