import { useQuery } from "@tanstack/react-query"
import {
  getAnatomiaDental,
  getBarrios,
  getCiudades,
  getDepartamentos,
  getHallazgosOdontologicos,
  getIdentificaciones,
  getNacionalidades,
  getProcedimientosOdontologicos,
  getPueblosIndigenas,
  getSeccionesFicha
} from "../api/codesystem/codesystem.action.js"
import { getAlergias, getAllAlergias } from "../api/alergias/get-alergias-patient.js"

export const useGetAlergiasByPatient = (patientId) => {
  return useQuery({
    queryKey: ['alergias', patientId],
    queryFn: () => getAlergias(patientId),
  })
}

export const useAlergias = () => {
  return useQuery({
    queryKey: ['alergiasCodes'],
    queryFn: getAllAlergias,
  })
} 

export const useAnatomiaDental = () => {
  return useQuery({
    queryKey: ['anatomiaDental'],
    queryFn: getAnatomiaDental,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const useBarriosDelParaguay = () => {
  return useQuery({
    queryKey: ['barrios'],
    queryFn: getBarrios,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const useCiudadesDelParaguay = () => {
  return useQuery({
    queryKey: ['ciudades'],
    queryFn: getCiudades,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const useDepartamentosDelParaguay = () => {
  return useQuery({
    queryKey: ['departamentos'],
    queryFn: getDepartamentos,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const useHallazgos = () => {
  return useQuery({
    queryKey: ['codigoHallazgo'],
    queryFn: getHallazgosOdontologicos,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const useIdentificaciones = () => {
  return useQuery({
    queryKey: ['identificaciones'],
    queryFn: getIdentificaciones,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const useNacionalidades = () => {
  return useQuery({
    queryKey: ['nacionalidades'],
    queryFn: getNacionalidades,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const usePueblosIndigenas = () => {
  return useQuery({
    queryKey: ['pueblosIndigenas'],
    queryFn: getPueblosIndigenas,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const useSeccionesFichaClinica = () => {
  return useQuery({
    queryKey: ['codigoSeccionesFichaClinica'],
    queryFn: getSeccionesFicha,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 

export const useProcedimientosOdontologicos = () => {
  return useQuery({
    queryKey: ['codigoProcedimientos'],
    queryFn: getProcedimientosOdontologicos,
    staleTime: 1000 * 60 * 60 * 72,
  })
} 