import React from 'react'
import { PatientForm } from '../components/PatientForm'
import { Header } from '../components/basics/Header'

export const PatientFormCreate = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Header />
      <h1 className='font-bold text-center px-8 mt-4 mb-4 text-3xl text-[#4a4a4a]'> Registro de pacientes </h1>
      <div className='flex flex-col items-center justify-center'>
        <PatientForm />
      </div>

    </div>
  )
}
