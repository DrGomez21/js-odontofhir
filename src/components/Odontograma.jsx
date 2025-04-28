import React, { useState } from 'react'
import { Diente } from './Diente';
import { dentalConditions } from '../utils/procedimientosDentales';

const ConditionSelector = () => {
  const [selectedCondition, setSelectedCondition] = useState('healthy')

  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value)
  }

  return (
    <div>
      <select
        name="condiciones"
        id="dental-condition-selector"
        value={selectedCondition}
        onChange={handleConditionChange}
      >
        {Object.entries(dentalConditions).map(([key, value]) => {
          <option key={key} value={key}>
            {value.name}
          </option>
        })}
      </select>
    </div>
  )
}

export const Odontograma = () => {

  // Estado para almacenar todas las partes seleccionadas de cada diente
  const [partesSeleccionadas, setPartesSeleccionadas] = useState({})

  // Numeros asocioados a los dientes
  const dientesSuperiores = ['18', '17', '16', '15', '14', '13', '12', '11', '21', '22', '23', '24', '25', '26', '27', '28'];
  const dientesInferiores = ['48', '47', '46', '45', '44', '43', '42', '41', '31', '32', '33', '34', '35', '36', '37', '38'];

  // Tratar el click de un diente
  const handleDienteClick = (parte, numeroDiente) => {
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
    console.log(`Click en diente ${numeroDiente} y en posición ${parte}`)
  }

  return (
    <div className='p-4 bg-white rounded-lg shadow-lg'>

      {/* Dientes superiores */}
      <div className='flex flex-wrap justify-center mb-8'>
        {dientesSuperiores.map(numero => (
          <Diente
            key={numero}
            number={numero}
            position='arriba'
            selected={partesSeleccionadas[numero] || []}
            onClick={handleDienteClick}
          />
        ))}
      </div>

      {/* Dientes inferiores */}
      <div className='flex flex-wrap justify-center'>
        {dientesInferiores.map(numero => (
          <Diente
            key={numero}
            number={numero}
            position='abajo'
            selected={partesSeleccionadas[numero] || []}
            onClick={handleDienteClick}
          />
        ))}
      </div>

      <ConditionSelector />

    </div>
  )
}
