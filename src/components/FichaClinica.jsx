import React from 'react'
import { Odontograma } from './Odontograma'
import { Encounter } from './Sidebar'

export const FichaClinica = ({ patient }) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='col-span-1'>
        <Odontograma patient={patient} />
      </div>
      <div className='col-span-1 bg-white rounded-md p-2'>
        <Encounter patientId={patient.id} />
      </div>
    </div>
  )
}
