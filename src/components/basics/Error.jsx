import React from 'react'
import FailIndicator from '../../assets/error-state.svg'

export const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <img src={FailIndicator} alt="Ocurrió un error" />
      <span className='text-sm font-light'>Ocurrió un error inesperado. Por favor, recarga la página.</span>
    </div>
  )
}