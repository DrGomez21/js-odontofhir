// Vamos a recibir el número de diente y lo vamos a asociar con el número de diente que tenemos en el servidor HAPI FHIR.

import { odontoFhirApi } from "../../api/fhir.api";
import { getAnatomiaDental } from "../../api/codesystem/codesystem.action";

const dientes = [
  {
    display: '11',
    code: '13008OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '12',
    code: '13007OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '13',
    code: '13006OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '14',
    code: '13005OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '15',
    code: '13004OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '16',
    code: '13003OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '17',
    code: '13002OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '18',
    code: '13001OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '21',
    code: '13009OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '22',
    code: '13010OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '23',
    code: '13011OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '24',
    code: '13012OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '25',
    code: '13013OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '26',
    code: '13014OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '27',
    code: '13015OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '28',
    code: '13016OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  
];

const dientesSuperiores = [
  {
    display: '11',
    code: '13008OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '12',
    code: '13007OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '13',
    code: '13006OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '14',
    code: '13005OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '15',
    code: '13004OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '16',
    code: '13003OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '17',
    code: '13002OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '18',
    code: '13001OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '21',
    code: '13009OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '22',
    code: '13010OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '23',
    code: '13011OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '24',
    code: '13012OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '25',
    code: '13013OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '26',
    code: '13014OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '27',
    code: '13015OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '28',
    code: '13016OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  }
]

const dientesInferiores = [
  {
    display: '41',
    code: '13025OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '42',
    code: '13026OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '43',
    code: '13027OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '44',
    code: '13028OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '45',
    code: '13029OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '46',
    code: '13030OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '47',
    code: '13031OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '48',
    code: '13032OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '38',
    code: '13017OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '37',
    code: '13018OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '36',
    code: '13019OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '35',
    code: '13020OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '34',
    code: '13021OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '33',
    code: '13022OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '32',
    code: '13023OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
  {
    display: '31',
    code: '13024OF',
    system: `${odontoFhirApi}/CodeSystem/1`,
  },
];

const DIENTE_ODONTOFHIR_CODE = {
  '11': '13008OF',
  '12': '13007OF',
  '13': '13006OF',
  '14': '13005OF',
  '15': '13004OF',
  '16': '13003OF',
  '17': '13002OF',
  '18': '13001OF',
  '21': '13009OF',
  '22': '13010OF',
  '23': '13011OF',
  '24': '13012OF',
  '25': '13013OF',
  '26': '13014OF',
  '27': '13015OF',
  '28': '13016OF',
  '38': '13017OF',
  '37': '13018OF',
  '36': '13019OF',
  '35': '13020OF',
  '34': '13021OF',
  '33': '13022OF',
  '32': '13023OF',
  '31': '13024OF',
  '41': '13025OF',
  '42': '13026OF',
  '43': '13027OF',
  '44': '13028OF',
  '45': '13029OF',
  '46': '13030OF',
  '47': '13031OF',
  '48': '13032OF',
}

const numeroDienteToCode = (numeroDiente) => {
  console.log(DIENTE_ODONTOFHIR_CODE[numeroDiente])
}

const NUMERO_POR_CODIGO = Object.fromEntries(
  Object.entries(DIENTE_ODONTOFHIR_CODE)
    .map(([numeroISO, codigo]) => [codigo, numeroISO])
)

// Y luego lo usas directamente
export function obtenerNumeroPorCodigo(codigoBuscado) {
  return NUMERO_POR_CODIGO[codigoBuscado] ?? null
}