import React from 'react'
import { PatientTable } from '../components/PatientTable'
import { Link } from 'react-router-dom'

export const PatientPage = () => {
  return (
    <div className='flex flex-col'>
      PatientPage
      <div className='flex justify-end p-4'>
        <Link to={'/patient-form'}>
          <button className='end-0 px-4 py-2 rounded-lg border-sky-600 bg-sky-200 text-blue-500 font-semibold hover:cursor-pointer'>
            Añadir paciente
          </button>
        </Link>
      </div>
      <PatientTable />
    </div>
  )
}
