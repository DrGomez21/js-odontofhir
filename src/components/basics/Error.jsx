import React from 'react'
import FailIndicator from '../../assets/serverdown.svg'

export const Error = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <img src={FailIndicator} alt="Ocurrió un error" className='w-[160px] h-[125px]' />
      <span className='font-medium'>Error: {message}</span>
    </div>
  )
}