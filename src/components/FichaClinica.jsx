import React from 'react'
import { Odontograma } from './Odontograma'
import { TablePatientProfile } from './TablePatientProfile'

export const FichaClinica = () => {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col gap-4 w-1/2 items-center'>
        <Odontograma />
        <button className='border w-fit px-4 py-2 rounded-md hover:scale-95 hover:rounded-xl hover:cursor-pointer hover:bg-blue-200 transition duration-150'>
          Nuevo procedimiento
        </button>
      </div>
      <div className='w-1/2'>
        <TablePatientProfile />
      </div>
    </div>
  )
}
