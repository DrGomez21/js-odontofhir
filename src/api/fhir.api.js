import axios from "axios";

const PATIENT_BASE_URL = 'http://localhost:8080/fhir/Patient/'

export const getAllPatients = async () => {
  console.log('Llamada a API')
  const response = await axios.get(PATIENT_BASE_URL)
  return response.data
}