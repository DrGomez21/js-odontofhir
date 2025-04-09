import React from 'react'

export const Indicator = ({ estado }) => {
  return (
    <div
      className={`
        ${estado === 'Finalizado' ? 'bg-green-100 text-sm text-green-400 border border-green-400' : ''}
        ${estado === 'En proceso' ? 'bg-sky-100 text-sm text-sky-400 border border-sky-400' : ''}
      font-medium px-2 rounded-md`}
    >
      {estado}
    </div>
  )
}
