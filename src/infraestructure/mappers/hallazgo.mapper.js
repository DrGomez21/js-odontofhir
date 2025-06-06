function quitarNumberISO(diente) {
  const { numberISO, estado, position, ...rest } = diente;
  return rest;
}

// Mapa de códigos a display
const HALLAZGO_MAP = {
  '12001OF': 'Absceso',
  '12002OF': 'Acumulación de sarro en dientes',
  '12003OF': 'Encías sangrantes',
  '12004OF': 'Evaluación dental previa a trasplante, cirugía u otro tratamiento',
  '12005OF': 'Caries dental',
  '12006OF': 'Diabetes',
  '12007OF': 'Alteraciones en la erupción dental',
  '12008OF': 'Boca seca (xerostomía)',
  '12009OF': 'Erosión dental por vómito persistente',
  '12010OF': 'Evaluación de hinchazón o lesión para descartar cáncer oral',
  '12011OF': 'Infección',
  '12012OF': 'Higene Oral Deficiente',
  '12013OF': 'Ausencia de atención dental reciente',
  '12014OF': 'Maloclusión',
  '12015OF': 'Lesión oral',
  '12016OF': 'Embarazo',
  '12017OF': 'Encías doloridas',
  '12018OF': 'Encías inflamadas',
  '12019OF': 'Dolor de la articulación temporomandibular',
  '12020OF': 'Anomalías dentales',
  '12021OF': 'Dolor de diente',
  '12022OF': 'Trauma dental'
}

/**
 * Dado un código de hallazgo, retorna un objeto con { code, display },
 * o null si el código no existe en el mapa.
 * 
 * @param {string} codigo - Código OdontoFHIR del hallazgo (p.ej. "12002OF")
 * @returns {{ code: string, display: string } | null}
 */
function getHallazgoByCode(codigo) {
  const display = HALLAZGO_MAP[codigo]
  return display
    ? { code: codigo, display, system: 'https://odontofhir.py/fhir/CodeSystem/HallazgosOdontologicos-OdontoFHIR-1' }
    : null
}


export const hallazgoMapper = (
  patientId,
  encounterId,
  diente,
  hallazgo,
) => {

  const { state: practitionerData } = JSON.parse(localStorage.getItem('practitioner-storage'));
  const bodySite = quitarNumberISO(diente)

  const hallazgoResource = {
    resourceType: "Observation",
    meta: {
      profile: [
        "https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-HallazgosOdontologicos-Observation-1"
      ]
    },
    /*Indica que la observación fue finalizada y registrada*/
    status: "final",
    bodySite: {
      coding: [bodySite]
    },
    code: {
      coding: [getHallazgoByCode(hallazgo)]
    },
    subject: {
      reference: `Patient/${patientId}`
    },
    encounter: {
      reference: `Encounter/${encounterId}`
    },
    /*Cambiado a performer por que es observation. Y cambiado a effectiveDatetime*/
    effectiveDateTime: new Date().toISOString(),
    performer: [
      {
        reference: `Practitioner/${practitionerData.practitioner.data.id}`
      }
    ]
  };

  return hallazgoResource;
};