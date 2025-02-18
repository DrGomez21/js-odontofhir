import React from 'react'
import NoData from '../../assets/nodata.svg'

export const NoData = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={NoData} alt="No hay datos encontrados" />
    </div>
  )
}
