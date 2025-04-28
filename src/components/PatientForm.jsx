import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePatient } from '../hooks/usePatient'
import { parseFHIRResource } from '../infraestructure/mappers/patient.mapper'
import { useCodeSystem } from '../hooks/useCodeSystem'

export const PatientForm = () => {

  const {
    register,
    handleSubmit,
    watch
  } = useForm()
  const { mutate } = usePatient()
  const {
    ciudadesDelParaguay,
    departamentosDelParaguay,
    nacionalidades,
    barriosDelParaguay
  } = useCodeSystem()

  // Nos suscribimos a los cambios en el input de la ciudad
  const ciudadSeleccionada = watch('ciudad')

  if (nacionalidades.isLoading || departamentosDelParaguay.isLoading || barriosDelParaguay.isLoading || ciudadesDelParaguay.isLoading) {
    return <p>Cargando...</p> // Podemos cambiar a disabled o enabled dependiendo del estado de la consulta
  }
  if (nacionalidades.isError || departamentosDelParaguay.isError || barriosDelParaguay.isError || ciudadesDelParaguay.isError) {
    return <p>Error al cargar los datos</p> // Podemos cambiar a disabled o enabled dependiendo del estado de la consulta
  }

  const barriosFiltrados = ciudadSeleccionada && ciudadSeleccionada.toString() === '0'
    ? barriosDelParaguay.data.slice(0, 68)
    : barriosDelParaguay.data.filter(barrio =>
      ciudadSeleccionada ? barrio.code.startsWith(ciudadSeleccionada.toString()) : false
    )

  console.log(ciudadSeleccionada)

  const onSubmit = (data) => {  
    const patient = parseFHIRResource(data)
    if (patient !== null) {
      console.log(patient)
      // mutate(patient)
    }
  }

  return (
    <form className="flex flex-col justify-center w-3/4 bg-white p-6 rounded-xl shadow-2xl" onSubmit={handleSubmit(onSubmit)} onError={() => console.log("falta algo")}>

      <div className='grid grid-cols-2 grid-rows-3 gap-4'>
        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="given">
          Nombre
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            type="text"
            id='given'
            placeholder="Nombre"
            {...register('given', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base" htmlFor="family">
          Apellido
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            type="text"
            id='family'
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
            id='telefono'
            placeholder="Número de teléfono"
            {...register('phoneValue', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base" htmlFor="email">
          Correo electrónico
          <input
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            type="email"
            id='email'
            placeholder="Email"
            {...register('emailValue', { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-2" htmlFor="direccion">
          Dirección (Nro. Casa, calle, etc.)
          <textarea
            className="px-4 py-2 h-auto text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-black"
            type="text"
            id='direccion'
            placeholder="Dirección"
            {...register('addresLine', { required: true })}
          />
        </label>

      </div>

      <div className='grid grid-cols-4 grid-rows-1 mt-4 gap-2'>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="pais">
          País:
          {nacionalidades.isLoading ? (
            <p id='pais'>Cargando nacionalidades</p> // Podemos cambiar a disabled o enabled dependiendo del estado de la consulta
          ) : (
            <select
              className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
              id="pais"
              enabled={nacionalidades.isSuccess.toString()}
              title='Nacionalidad del paciente'
              defaultValue={600}
              {...register('nacionalidad', { required: true })}
            >
              {nacionalidades.data.map((pais) => (
                <option key={pais.code} value={pais.code}>
                  {pais.display}
                </option>
              ))}
            </select>
          )}
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="departamento">
          Departamento:
          {departamentosDelParaguay.isLoading ? (
            <p>Cargando departamentos</p> // Podemos cambiar a disabled o enabled dependiendo del estado de la consulta
          ) : (
            <select
              className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
              id="departamento"
              enabled={departamentosDelParaguay.isSuccess.toString()}
              {...register('departamento', { required: true })}
            >
              {departamentosDelParaguay.data.map((departamento) => (
                <option key={departamento.code} value={departamento.code}>
                  {departamento.display}
                </option>
              ))}
            </select>
          )}
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="ciudad">
          Ciudad:
          <select
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
            id="ciudad"
            title='Ciudad del paciente'
            {...register('ciudad', { required: true })}
          >
            <option value="">Seleccione una ciudad</option>
            {ciudadesDelParaguay.data.map((ciudad) => (
              <option key={ciudad.code} value={ciudad.code}>
                {ciudad.display}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 font-semibold text-[#4a4a4a] text-base col-span-1" htmlFor="barrio">
          Barrio:
          <select
            className="px-4 py-2 text-base font-medium rounded-md border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
            id="barrio"
            {...register('barrio', { required: true })}
          >
            {barriosFiltrados.map((barrio) => (
              <option key={barrio.code} value={barrio.code}>
                {barrio.display}
              </option>
            ))}
          </select>
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
