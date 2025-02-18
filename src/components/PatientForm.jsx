import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { postPatient } from '../api/fhir.api'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const PatientForm = () => {

  const { register, handleSubmit } = useForm()
  const queryClient = useQueryClient()
  const navigate = useNavigate()


  const parseFHIRResource = (patient) => {
    const patientResource = {
      resourceType: 'Patient',
      name: [
        {
          use: 'official',
          given: [
            patient.given
          ],
          family: patient.family
        }
      ],
      gender: patient.gender,
      birthDate: patient.birthDate,
      telecom: [
        {
          value: patient.phoneValue,
          use: 'mobile',
          system: 'phone',
        },
        {
          system: 'email',
          value: patient.emailValue
        }
      ],
      addres: [
        {
          line: [
            patient.addresLine
          ],
          city: patient.addresCity,
          state: patient.addresState,
          country: patient.addresCountry
        }
      ]
    }

    return patientResource
  }

  const { mutate } = useMutation({
    mutationFn: postPatient,
    onSuccess: (newPatient) => {

      // Invalidamos la caché
      queryClient.invalidateQueries({ queryKey: ['patients'] })

      // Actualizar caché de react-query
      queryClient.setQueryData(['patients'], (oldData) => {
        if (oldData == null) return [newPatient]
        return [...oldData, newPatient]
      })

      toast.success()
    }
  })

  const onSubmit = (data) => {
    const patient = parseFHIRResource(data)
    if (patient !== null) {
      mutate(patient)
    }
  }

  return (

    <form className="flex flex-col justify-center w-fit bg-white p-6 rounded-xl shadow-2xl" onSubmit={handleSubmit(onSubmit)}>

      <div className='grid grid-cols-2 grid-rows-3 gap-4'>
        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="given">
          Nombre
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            type="text"
            placeholder="Nombre"
            {...register('given', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base" htmlFor="family">
          Apellido
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            type="text"
            placeholder="Apellido"
            {...register('family', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base" htmlFor="gender">
          Género
          <select
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
            id="gender"
            {...register('gender', { required: true })}
          >
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
            <option value="unknown">Desconocido</option>
          </select>
        </label>

        <label htmlFor="birthDate" className="font-semibold text-[#4a4a4a] text-base flex flex-col gap-1">Nacimiento:
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
            type="date"
            id="birthDate"
            {...register('birthDate', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base" htmlFor="telefono">
          Número de teléfono
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
            type="tel"
            placeholder="Número de teléfono"
            {...register('phoneValue', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base" htmlFor="email">
          Correo electrónico
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            type="email"
            placeholder="Email"
            {...register('emailValue', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-2" htmlFor="direccion">
          Dirección (Nro. Casa, calle, etc.)
          <textarea
            className="px-4 py-2 h-auto text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            type="text"
            placeholder="Dirección"
            {...register('addresLine', { required: true })}
          />
        </label>

      </div>

      <div className='grid grid-cols-3 grid-rows-1 mt-4 gap-2'>
        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="ciudad">
          Ciudad:
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            id="ciudad"
            type="text"
            placeholder="Ciudad"
            {...register('addresCity')}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="departamento">
          Departamento
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
            id="departamento"
            type="text"
            placeholder="Departamento"
            {...register('addresState', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="pais">
          País
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
            type="text"
            placeholder="País"
            {...register('addresCountry', { required: true })}
          />
        </label>
      </div>

      <button
        className='flex mt-4 items-center justify-center gap-2 end-0 px-4 py-2 rounded-md border-2 border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M16 19h6" />
          <path d="M19 16v6" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
        </svg>
        Registrar paciente
      </button>
    </form>
  )
}
