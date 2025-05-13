import React from 'react'
import NoData from '../../assets/empty-patient-state.svg'

export const SinDatos = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <img src={NoData} alt="No hay datos encontrados" />
      <span className='text-sm font-light'>Aún no hay pacientes registrados.</span>
    </div>
  )
}
