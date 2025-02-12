import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { PatientDetail } from '../components/PatientDetail'
import { FichaClinica } from '../components/FichaClinica'

const getPatientById = async (id) => {
  console.log(`Buscando información del paciente ${id}`)
  const response = await axios.get(`http://localhost:8080/fhir/Patient/${id}/`)
  return response.data
}

export const PatientProfile = () => {
  const { id } = useParams()

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ['profile', id],
    queryFn: () => getPatientById(id),
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Error {error.message}</p>

  if (isSuccess) {
    console.log(data)
  }

  return (
    <div className='flex flex-col'>
      <h1>PatientProfile</h1>
      <PatientDetail patient={data} />
      <h2>Ficha clínica</h2>
      <FichaClinica />
    </div>
  )
}
