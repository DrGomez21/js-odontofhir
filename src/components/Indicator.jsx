import React from 'react'

export const Indicator = ({ estado }) => {
  return (
    <div
      className={`
        ${estado === 'finished' ? 'bg-green-100 text-sm text-green-400 border border-green-400' : ''}
        ${estado === 'in-progress' ? 'bg-sky-100 text-sm text-sky-400 border border-sky-400' : ''}
        ${estado === 'cancelled' ? 'bg-red-100 text-sm text-red-400 border border-red-400' : ''}
      font-medium px-2 rounded-md w-fit`}
    >
      {estado}
    </div>
  )
}
