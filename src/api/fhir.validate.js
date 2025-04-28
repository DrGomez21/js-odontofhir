import { odontoFhirApi } from "./fhir.api"

/**
 * Validates a FHIR resource against a HAPI FHIR server.
 *
 * @async
 * @function
 * @param {string} resourceType - The type of the FHIR resource (e.g., "Patient", "Observation").
 * @param {Object} resource - The FHIR resource object to validate.
 * @returns {Promise<Error|void>} Resolves with no value if validation is successful, or an Error if validation fails.
 * @throws {Error} If `resourceType` or `resource` is not provided.
 */
export const validateResource = async (resourceType, resource) => {
  if (!resourceType) return Error('Se requiere el endpoint del recurso a validar')
  if (!resource) return Error('Se requiere el recurso para validar')

  const response = await odontoFhirApi.post(`/${resourceType}/$validate`, {
    headers: {
      'Content-Type': 'application/json'
    },
    data: resource
  })

  console.log(response)
}