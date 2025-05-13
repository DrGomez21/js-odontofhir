import { odontoFhirApi } from "../fhir.api.js";


export const getAnatomiaDental = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_ANATOMIADENTAL)
  const codigoAnatomias = response.data.concept
  return codigoAnatomias
}

export const getBarrios = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_BARRIOS)
  const barrios = response.data.concept
  return barrios
}

export const getCiudades = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_CIUDADES)
  const ciudades = response.data.concept
  return ciudades
}

export const getDepartamentos = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_DEPARTAMENTOS)
  const departamentos = response.data.concept
  return departamentos
}

export const getIdentificaciones = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_INDENTIFICACONES)
  const identificaciones = response.data.concept
  return identificaciones
}

export const getHallazgosOdontologicos = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_HALLAZGOSODONTOLOGICOS)
  const hallazgos = response.data.concept
  return hallazgos
}

export const getNacionalidades = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_NACIONALIDAD)
  const nacionalidades = response.data.concept
  return nacionalidades
}

export const getProcedimientosOdontologicos = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_PROCEDIMIENTOSODONTOLOGICOS)
  const procedimientos = response.data.concept
  return procedimientos
}

export const getPueblosIndigenas = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_PUEBLOSINDIGENAS)
  const pueblos = response.data.concept
  return pueblos
}

export const getSeccionesFicha = async () => {
  const response = await odontoFhirApi.get(import.meta.env.VITE_CODESYSTEM_ID_SECCIONESFICHA)
  const seccionesFicha = response.data.concept
  return seccionesFicha
}