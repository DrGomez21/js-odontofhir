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

export const useCodeSystem = () => {

  const anatomiaDental = useQuery({
    queryKey: ['anatomiaDental'],
    queryFn: getAnatomiaDental,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const barriosDelParaguay = useQuery({
    queryKey: ['barrio'],
    queryFn: getBarrios,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const ciudadesDelParaguay = useQuery({
    queryKey: ['ciudades'],
    queryFn: getCiudades,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const departamentosDelParaguay = useQuery({
    queryKey: ['departamentos'],
    queryFn: getDepartamentos,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const hallazgos = useQuery({
    queryKey: ['hallazgos'],
    queryFn: getHallazgosOdontologicos,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const identificaciones = useQuery({
    queryKey: ['identificaciones'],
    queryFn: getIdentificaciones,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const nacionalidades = useQuery({
    queryKey: ['nacionalidades'],
    queryFn: getNacionalidades,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const pueblosIndigenas = useQuery({
    queryKey: ['pueblosIndigenas'],
    queryFn: getPueblosIndigenas,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const seccionesFichaClinica = useQuery({
    queryKey: ['seccionesFichaClinica'],
    queryFn: getSeccionesFicha,
    staleTime: 1000 * 60 * 60 * 72,
  })

  const procedimientosOdontologicos = useQuery({
    queryKey: ['seccionesFichaClinica'],
    queryFn: getProcedimientosOdontologicos,
    staleTime: 1000 * 60 * 60 * 72,
  })

  return {
    barriosDelParaguay,
    ciudadesDelParaguay,
    departamentosDelParaguay,
    hallazgos,
    identificaciones,
    nacionalidades,
    pueblosIndigenas,
    seccionesFichaClinica,
    procedimientosOdontologicos,
    anatomiaDental,
  }
}