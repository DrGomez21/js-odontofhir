import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { PatientDetail } from '../components/PatientDetail'
import { FichaClinica } from '../components/FichaClinica'
import Loader from '../components/basics/Loader'
import { Error } from '../components/basics/Error'
import { Folder } from 'lucide-react'
import { BotonConPlus, BotonConFolder } from '../components/boton/boton';


const getPatientById = async (id) => {
  console.log(`Buscando información del paciente ${id}`)
  const response = await axios.get(`http://localhost:8080/fhir/Patient/${id}/`)
  return response.data
}

export const PatientProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['profile', id],
    queryFn: () => getPatientById(id)
  })

  if (isLoading) return <Loader />
  if (isError) return <Error message={error.message} />

  return (
    <div className='flex flex-col mx-8 py-4 gap-4'>
      <h1 className='font-bold text-[#4A4A4A] text-3xl'>Perfil del paciente</h1>

      <div className='flex w-full justify-between gap-8 items-center'>
        <PatientDetail patient={data} />
        <div className='flex flex-col gap-2'>
          <BotonConFolder onClick={() => navigate(`/patient/${id}/allergies`)}>
            <span className='nline-block max-w-full overflow-hidden whitespace-nowrap text-ellipsis'>Alergias e intolerancias</span>
          </BotonConFolder>
        </div>
      </div>

      <h2 className='font-bold text-[#4A4A4A] text-3xl'>Ficha clínica</h2>
      <FichaClinica patient={data} />
    </div>
  )
}
