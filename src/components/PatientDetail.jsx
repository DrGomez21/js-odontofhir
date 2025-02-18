import React from 'react'

export const PatientDetail = ({ patient }) => {

  return (
    <div className='flex justify-between border border-[#2B7A78] rounded-sm items-center p-4 text-[#4a4a4a] w-full'>
      <div>
        <p className='text-2xl font-bold'>{patient.name[0].given[0]} {patient.name[0].family}</p>
      </div>
      <div>
        <p><span className='font-bold'>Edad:</span> 24 años {/* Se debe corregir para probarlo con la estructura real de FHIR. */}</p>
        <p><span className='font-bold'>Cédula de identidad:</span> 5719073 { /* Se debe corregir para probarlo con la estructura real de FHIR. */}</p>
        <p><span className='font-bold'>Última consulta:</span> 23/05/2024 {patient.meta.lastUpdate}</p>
      </div>

      <div className='flex flex-col'>
        {
          patient.telecom.map(option => (
            <p key={option.value}><span className='font-bold'>{option.system === 'phone' ? 'Teléfono' : 'Email'}:</span> {option.value}</p>
          ))
        }
      </div>

    </div>
  )
}
