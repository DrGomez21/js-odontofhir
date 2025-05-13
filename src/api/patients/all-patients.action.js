import { odontoFhirApi } from "../fhir.api.js"

export const allPatientsAction = async () => {
  try {
    const { data } = await odontoFhirApi.get('/Patient')

    // En caso de que no haya pacientes, se retorna un arreglo vacío
    // Esto es para evitar que se rompa el componente de la tabla.
    if (data?.total === 0) {
      return []
    }

    // Si hay pacientes, se retorna el arreglo de pacientes
    // En este caso, los pacientes están en el arreglo entry,
    // Entonces, una ve tenemos la data (respuesta de la API)
    // accedemos a su campo entry, desde ahí obtenemos solo el resource.
    // En caso de no haber datos se manda un arreglo vacío
    const patients = data?.entry ? data.entry.map((entry) => entry.resource) : []

    return patients
  } catch (error) {
    console.error(error)
    throw 'Error al obtener todos los pacientes'
  }
}
