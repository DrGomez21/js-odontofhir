import React from 'react'
import { Odontograma } from './Odontograma'

export const FichaClinica = ({ patient }) => {
  return (
    <div className='flex gap-4'>
      <div className='w-full'>
        <Odontograma patient={patient} />
      </div>
    </div>
  )
}
