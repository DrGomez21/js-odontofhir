import React, { useState } from 'react'

export const Diente = ({
  diente,
  selected,
  onClick
}) => {

  return (
    <div className='relative w-14 h-20 mx-2'>
      <div className='absolute w-full text-center text-sm font-medium'>{diente.numberISO}</div>

      <div className='absolute top-2 w-full h-16 flex items-center justify-center'>
        <div
          id='diente'
          className={`w-10 h-10 border-2 
            ${selected.includes('centro') ? 'bg-blue-400 rounded-xl' : 'bg-white rounded-lg'}
            cursor-pointer hover:scale-95 hover:border-4 hover:rounded-xl transition-all duration-100
          `}
          onClick={() => onClick('centro', diente.numberISO, diente)}
        />
      </div>

    </div>
  )
}
