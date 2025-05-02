import React, { useState } from 'react'
import { Diente } from './Diente';

export const Odontograma = () => {

  // Estado para almacenar todas las partes seleccionadas de cada diente
  const [partesSeleccionadas, setPartesSeleccionadas] = useState({})

  const dientesSuperiores = [
    {
      display: 'Incisivo central superior derecho permanente completo',
      numberISO: '11',
      code: '13008OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo lateral superior derecho permanente completo',
      numberISO: '12',
      code: '13007OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Canino superior derecho permanente completo',
      numberISO: '13',
      code: '13006OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer premolar superior derecho permanente completo',
      numberISO: '14',
      code: '13005OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo premolar superior derecho permanente completo',
      numberISO: '15',
      code: '13004OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer molar superior derecho permanente completo',
      numberISO: '16',
      code: '13003OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo molar superior derecho permanente completo',
      numberISO: '17',
      code: '13002OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Tercer molar superior derecho permanente completo',
      numberISO: '18',
      code: '13001OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo central superior izquierdo permanente completo',
      numberISO: '21',
      code: '13009OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo lateral superior izquierdo permanente completo',
      numberISO: '22',
      code: '13010OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Canino superior izquierdo permanente completo',
      numberISO: '23',
      code: '13011OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer premolar superior izquierdo permanente completo',
      numberISO: '24',
      code: '13012OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo premolar superior izquierdo permanente completo',
      numberISO: '25',
      code: '13013OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer molar superior izquierdo permanente completo',
      numberISO: '26',
      code: '13014OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo molar superior izquierdo permanente completo',
      numberISO: '27',
      code: '13015OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Tercer molar superior izquierdo permanente completo',
      numberISO: '28',
      code: '13016OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    }
  ]
  
  const dientesInferiores = [
    {
      display: 'Incisivo central inferior derecho permanente completo',
      numberISO: '41',
      code: '13025OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo lateral inferior derecho permanente completo',
      numberISO: '42',
      code: '13026OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Canino inferior derecho permanente completo',
      numberISO: '43',
      code: '13027OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer premolar inferior derecho permanente completo',
      numberISO: '44',
      code: '13028OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo premolar inferior derecho permanente completo',
      numberISO: '45',
      code: '13029OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer molar inferior derecho permanente completo',
      numberISO: '46',
      code: '13030OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo molar inferior derecho permanente completo',
      numberISO: '47',
      code: '13031OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Tercer molar inferior derecho permanente completo',
      numberISO: '48',
      code: '13032OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Tercer molar inferior izquierdo permanente completo',
      numberISO: '38',
      code: '13017OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo molar inferior izquierdo permanente completo',
      numberISO: '37',
      code: '13018OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer molar inferior izquierdo permanente completo',
      numberISO: '36',
      code: '13019OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo premolar inferior izquierdo permanente completo',
      numberISO: '35',
      code: '13020OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer premolar inferior izquierdo permanente completo',
      numberISO: '34',
      code: '13021OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Canino inferior izquierdo permanente completo',
      numberISO: '33',
      code: '13022OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo lateral inferior izquierdo permanente completo',
      numberISO: '32',
      code: '13023OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo central inferior izquierdo permanente completo',
      numberISO: '31',
      code: '13024OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
  ];

  // Tratar el click de un diente
  const handleDienteClick = (parte, numeroDiente, diente) => {
    setPartesSeleccionadas(prev => {
      const partesDiente = prev[numeroDiente] || []
      /* En caso de que el diente ya esté marcado, se debe desmarcar */
      if (partesDiente.includes(parte)) {
        return {
          ...prev,
          [numeroDiente]: partesDiente.filter(part => part !== parte)
        };
      } else { /* Si no está marcado, se agrega ese diente */
        return {
          ...prev,
          [numeroDiente]: [...partesDiente, parte]
        };
      }
    })
    console.log(diente)
  }

  return (
    <div className='p-4 bg-white rounded-lg shadow-lg'>

      {/* Dientes superiores */}
      <div className='flex flex-wrap justify-center mb-8'>
        {dientesSuperiores.map(diente => (
          <Diente
            key={diente.numberISO}
            diente={diente}
            position='arriba'
            selected={partesSeleccionadas[diente.numberISO] || []}
            onClick={handleDienteClick}
          />
        ))}
      </div>

      {/* Dientes inferiores */}
      <div className='flex flex-wrap justify-center'>
        {dientesInferiores.map(diente => (
          <Diente
            key={diente.numberISO}
            diente={diente}
            position='abajo'
            selected={partesSeleccionadas[diente.numberISO] || []}
            onClick={handleDienteClick}
          />
        ))}
      </div>

    </div>
  )
}
