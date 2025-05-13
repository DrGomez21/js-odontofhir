import React from 'react'

export const NotasProcedimiento = ({ procedimiento }) => {
  return (
    <div className='w-fit flex flex-col items-center justify-center p-4 rounded-lg shadow-xl bg-white'>
      <span>Realizado el: {procedimiento.fecha}</span>
      <p>Diente: {procedimiento.diente}</p>
      <p>Procedimiento: {procedimiento.procedimiento}</p>
      <p>Estado: {procedimiento.estado}</p>
      <p>Notas</p>
      <p>{procedimiento.notas}</p>
    </div>
  )
}
