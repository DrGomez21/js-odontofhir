import React from 'react'
import { PatientTable } from '../components/PatientTable'
import { Link } from 'react-router-dom'
import { Header } from '../components/basics/Header'
import { BotonConPlus, BotonConFolder } from '../components/boton/boton';
import { usePractitionerStore } from '../storage/practitionerStore';

export const PatientPage = () => {

  // const { data: practitioner } = usePractitionerStore((state) => state.practitioner);
  // console.log('Practitioner data:', practitioner);

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
      {/* Ejemplo de como acceder a los datos del practitioner: */}
      {/* <p>Hola, {practitioner.resource.name[0].given[0]} {practitioner.resource.name[0].family}</p> */}

      <div className='mx-12 mt-4'>
        <PatientTable />
      </div>

    </div>
  )
}
