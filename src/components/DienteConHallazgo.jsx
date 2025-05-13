import React from 'react'

export const DienteConHallazgo = ({
  diente,
  onClick
}) => {

  return (
    <div className='relative w-14 h-20 mx-2'>
      <div className='absolute w-full text-center text-sm font-medium'>{diente.numberISO}</div>

      <div className='absolute top-2 w-full h-16 flex items-center justify-center'>
        <div
          className={`
            w-10 h-10 border-2 rounded-lg 
            bg-yellow-300
            cursor-pointer hover:scale-95 hover:border-4 hover:rounded-xl transition-all duration-100
          `}
          onClick={() => onClick(diente)}
        />
      </div>

    </div>
  )
}