import React from 'react'
import { PatientTable } from '../components/PatientTable'
import { Link } from 'react-router-dom'
import { Header } from '../components/basics/Header'
import { BotonConPlus, BotonConFolder } from '../components/boton/boton';


export const PatientPage = () => {
  return (
    <div className='flex flex-col overflow-y-hidden'>

      <Header />

      <div className='flex justify-end py-2 mx-12'>
        <Link to={'/patient-form'}>
          <BotonConPlus>
            Añadir paciente
          </BotonConPlus>
        </Link>
      </div>

      <div className='mx-12 mt-4'>
        <PatientTable />
      </div>

    </div>
  )
}
