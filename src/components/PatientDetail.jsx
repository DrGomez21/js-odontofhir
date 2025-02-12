import React from 'react'

export const PatientDetail = ({ patient }) => {

  return (
    <div className='flex justify-between border items-center mx-6 p-2'>
      <div>
        <p>Nombre: {patient.name[0].given[0]} {patient.name[0].family}</p>
      </div>
      <div>
        <p>Edad: 24 años {/* Se debe corregir para probarlo con la estructura real de FHIR. */}</p>
        <p>Cédula de identidad: 5719073 { /* Se debe corregir para probarlo con la estructura real de FHIR. */}</p>
        <p>Última consulta: 23/05/2024 {patient.meta.lastUpdate}</p>
      </div>

      <div className='flex flex-col'>
        {
          patient.telecom.map(option => (
            <p key={option.value}>{option.system === 'phone' ? 'Teléfono' : 'Email'}: {option.value}</p>
          ))
        }
      </div>

    </div>
  )
}
