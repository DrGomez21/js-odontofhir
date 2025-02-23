import React, { useState } from 'react'
import { dentalConditions } from '../utils/procedimientosDentales'

export const Diente = ({
  number,
  position,
  selected,
  conditions,
  currentCondition,
  onClick
}) => {

  // Se definen las partes del diente
  const parts = ['arriba', 'derecha', 'abajo', 'izquierda', 'centro']

  const getPartStyle = (part) => {
    const condition = conditions[`${number}-${part}`] || 'healthy'
    return `${dentalConditions[condition].color} rounded-md`
  }

  return (
    <div className='relative w-14 h-20 my-1 mx-2'>
      <div className='absolute w-full text-center text-sm font-medium'>{number}</div>
      
      <div className='absolute top-5 w-full h-16 flex items-center justify-center'>
        {/* Parte superior del diente */}
        <div
          className={`absolute top-0 w-8 h-2.5 border-1 border-black
            ${getPartStyle} cursor-pointer hover:scale-105 hover:border-2 hover:rounded-md transition-all duration-100
          `}
          onClick={() => onClick('arriba', number)}
        />

        {/* Parte derecha del diente */}
        <div
          className={`absolute top-3 right-0 w-2.5 h-8 border
            ${selected.includes('derecha') ? 'bg-blue-400 rounded-md' : 'bg-white'}
            cursor-pointer hover:scale-105 hover:border-2 hover:rounded-md transition-all duration-100
          `}
          onClick={() => onClick('derecha', number)}
        />

        {/* Parte inferior del diente */}
        <div
          className={`absolute bottom-2 w-8 h-2.5 border
            ${selected.includes('abajo') ? 'bg-blue-400 rounded-md' : 'bg-white'}
            cursor-pointer hover:scale-105 hover:border-2 hover:rounded-md transition-all duration-100
          `}
          onClick={() => onClick('abajo', number)}
        />

        {/* Parte izquierda del diente */}
        <div
          className={`absolute top-3 left-0 w-2.5 h-8 border
            ${selected.includes('izquierda') ? 'bg-blue-400 rounded-md' : 'bg-white'}
            cursor-pointer hover:scale-105 hover:border-2 hover:rounded-md transition-all duration-100
          `}
          onClick={() => onClick('izquierda', number)}
        />

        {/* Centro del diente */}
        <div
          className={`absolute top-3 w-8 h-8 border
            ${selected.includes('centro') ? 'bg-blue-400 rounded-md' : 'bg-white'}
            cursor-pointer hover:scale-95 hover:border-2 hover:rounded-md transition-all duration-100
          `}
          onClick={() => onClick('centro', number)}
        />
      </div>
    </div>
  )
}
