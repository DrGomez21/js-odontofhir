import { odontoFhirApi } from "../fhir.api"

/*Se cambia por Observation */

export const getHallazgoByEncounterId = async (encounterId) => {
  try {
    const response = await odontoFhirApi.get(`/Observation?encounter=Encounter/${encounterId}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener los hallazgos.'
  }
}

export const getHallazgoByPatientId = async (patientId) => {
  try {
    const response = await odontoFhirApi.get(`/Observation?subject=Patient/${patientId}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw 'Error al obtener los hallazgos del paciente.'
  }
}

// Esta función busca hallazgos (Observation) asociados a un diente específico de un paciente,
// filtrando manualmente por el código del diente dentro del campo bodySite.

export const getHallazgoByPatientIdAndToothCode = async (patientId, toothCode) => {
  try {
    // 1. Pedimos todas las observaciones (hallazgos) asociadas al paciente
    const response = await odontoFhirApi.get(`/Observation?subject=Patient/${patientId}`);

    // 2. Filtramos las observaciones que tengan bodySite.coding.code igual al código del diente
    const hallazgos = response.data.entry?.filter(entry => {
      const bodySite = entry.resource.bodySite;        
      const codings = bodySite?.coding;                

      // Verificamos que 'codings' sea un array y que contenga el código buscado
      return Array.isArray(codings) && //Linea 29
        codings.some(coding => coding.code === toothCode);
    }) || []; // Si no hay entry, devolvemos un array vacío

    // 3. Devolvemos las observaciones filtradas dentro de un Bundle FHIR válido
    return {
      resourceType: "Bundle",
      type: "searchset",
      entry: hallazgos
    };

  } catch (error) {
    // 4. Si ocurre un error en la petición o el filtrado, lo mostramos en consola
    console.error(error);
    throw 'Error al obtener los hallazgos del paciente.';
  }
};



export const getHallazgoByReference = async (conditionReference) => {
  const { data } = await odontoFhirApi.get(`/${conditionReference}`)
  return data
}