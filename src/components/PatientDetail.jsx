import React from 'react'
import { Error } from './basics/Error'

export const PatientDetail = ({ patient }) => {

  if (!patient) return <Error />

  /**
   * Calcula la edad de una persona en base a su fecha de nacimiento.
   *
   * @param {Date|string} fechaNacimiento - La fecha de nacimiento de la persona. Puede ser un objeto Date o una cadena en formato reconocible por el constructor de Date.
   * @returns {number} La edad calculada en años.
   */
  const calcularEdad = (fechaNacimiento) => {
    if (typeof fechaNacimiento === 'string') fechaNacimiento = new Date(fechaNacimiento)

    const fechaActual = new Date()
    const anioActual = fechaActual.getFullYear()
    const mesActual = fechaActual.getMonth() + 1
    const diaActual = fechaActual.getDate()

    let edad = anioActual - fechaNacimiento.getFullYear()
    if (mesActual < (fechaNacimiento.getMonth() + 1) || (mesActual === (fechaNacimiento.getMonth() + 1) && diaActual < fechaNacimiento.getDate())) {
      edad--
    }
    return edad
  }

  return (
    <div className='flex items-center justify-around w-full p-4 rounded-sm border-2 border-[#2B7A78] text-[#4a4a4a] bg-white'>
      <div>
        <p className='text-2xl font-bold'>{patient.name[0].given[0]} {patient.name[0].family}</p>
      </div>
      <div>
        <p><span className='font-bold'>Edad:</span> {calcularEdad(patient.birthDate)} años</p>
        <p><span className='font-bold'>Documento de identidad:</span> {patient.identifier[0].value}</p>
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
