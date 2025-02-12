import React from 'react'

export const Diente = ({
  number,
  position,
  selected,
  onClick
}) => {

  // Se definen las partes del diente
  const parts = ['arriba', 'derecha', 'abajo', 'izquierda', 'centro']

  return (
    <div className='relative w-16 h-20 m-1'>
      <div className='absolute w-full text-center text-xs'>{number}</div>
      <div className='absolute top-4 w-full h-16 flex items-center justify-center'>
        {/* Parte superior del diente */}
        <div
          className={`absolute top-0 left-1/4 w-8 h-2 border
            ${selected.includes('arriba') ? 'bg-blue-400' : 'bg-white'}
            cursor-pointer hover:bg-blue-200  
          `}
          onClick={() => onClick('arriba', number)}
        />

        {/* Parte derecha del diente */}
        <div
          className={`absolute top-2 right-0 w-2 h-8 border
            ${selected.includes('derecha') ? 'bg-blue-400' : 'bg-white'}
            cursor-pointer hover:bg-blue-200
          `}
          onClick={() => onClick('derecha', number)}
        />

        {/* Parte inferior del diente */}
        <div
          className={`absolute bottom-0 left-1/4 w-8 h-2 border
            ${selected.includes('abajo') ? 'bg-blue-400' : 'bg-white'}
            cursor-pointer hover:bg-blue-200
          `}
          onClick={() => onClick('abajo', number)}
        />

        {/* Parte izquierda del diente */}
        <div
          className={`absolute top-2 left-0 w-2 h-8 border
            ${selected.includes('izquierda') ? 'bg-blue-400' : 'bg-white'}
            cursor-pointer hover:bg-blue-200
          `}
          onClick={() => onClick('izquierda', number)}
        />

        {/* Centro del diente */}
        <div
          className={`absolute top-2 left-1/4 w-8 h-8 border
            ${selected.includes('centro') ? 'bg-blue-400' : 'bg-white'}
            cursor-pointer hover:bg-blue-200
          `}
          onClick={() => onClick('centro', number)}
        />
      </div>
    </div>
  )
}
