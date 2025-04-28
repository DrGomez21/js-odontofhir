import React from 'react'
import { Odontograma } from './Odontograma'
import { TablePatientProfile } from './TablePatientProfile'
import DentalChart from './claude/ClauOdontograma'

export const FichaClinica = () => {
  return (
    <div className='flex gap-4'>
      <div className='w-1/2'>
        {/* <Odontograma /> */}
        <DentalChart />
      </div>
      <div className='flex flex-col w-1/2'>
        <TablePatientProfile />
        <button className='flex mt-6 justify-center gap-2 end-0 px-4 py-2 rounded-md border-2 border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all'>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2B7A78" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
          Nuevo procedimiento
        </button>
      </div>
    </div>
  )
}
