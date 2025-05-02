import { odontoFhirApi } from "../fhir.api.js";

export const getAnatomiaDental = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/1")
  const codigoAnatomias = response.data.concept
  return codigoAnatomias
}

export const getBarrios = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/2")
  const barrios = response.data.concept
  return barrios
}

export const getCiudades = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/3")
  const ciudades = response.data.concept
  return ciudades
}

export const getDepartamentos = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/4")
  const departamentos = response.data.concept
  return departamentos
}

export const getIdentificaciones = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/5")
  const identificaciones = response.data.concept
  return identificaciones
}

export const getHallazgosOdontologicos = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/6")
  const hallazgos = response.data.concept
  return hallazgos
}

export const getNacionalidades = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/7")
  const nacionalidades = response.data.concept
  return nacionalidades
}

export const getProcedimientosOdontologicos = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/8")
  const procedimientos = response.data.concept
  return procedimientos
}

export const getPueblosIndigenas = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/9")
  const pueblos = response.data.concept
  return pueblos
}

export const getSeccionesFicha = async () => {
  const response = await odontoFhirApi.get("/CodeSystem/10")
  const seccionesFicha = response.data.concept
  return seccionesFicha
}