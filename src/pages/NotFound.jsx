import React from 'react'
import NotFoundImage from '../assets/pagenotfound.svg'

export const NotFound = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center mt-8'>
      <img src={NotFoundImage} className='w-80' />
      <h1 className='font-semibold'>Esta página no se encontró</h1>
      <p className='font-light'>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  )
}
