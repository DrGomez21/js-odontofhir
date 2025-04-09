import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { PatientDetail } from '../components/PatientDetail'
import { FichaClinica } from '../components/FichaClinica'
import Loader from '../components/basics/Loader'
import { Error } from '../components/basics/Error'
import { NotasProcedimiento } from '../components/NotasProcedimiento'
import { deletePatientById } from '../api/fhir.api'

const getPatientById = async (id) => {
  console.log(`Buscando información del paciente ${id}`)
  const response = await axios.get(`http://localhost:8080/fhir/Patient/${id}/`)
  return response.data
}

export const PatientProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ['profile', id],
    queryFn: () => getPatientById(id),
    staleTime: 1000 * 60 * 5,
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: deletePatientById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] })
    },
    onError: (error) => {
      console.log("Error al eliminar el recurso", error)
    }
  })

  const handleDelete = () => {
    if (confirm("¿Seguro que quieres eliminar este recurso?")) {
      mutate(id);
      navigate('/');
    }
  };

  if (isLoading) return <Loader />
  if (isError) return <Error message={error.message} />

  return (
    <div className='flex flex-col mx-8 py-6 gap-4'>
      <h1 className='font-bold text-[#4A4A4A] text-4xl'>Perfil del paciente</h1>
      <div className='flex w-full justify-between gap-12 items-center'>
        <PatientDetail patient={data} />
        <button
          className='flex items-center gap-2 px-4 py-2 rounded-md border-2 border-gray-600 bg-[#fcbeb3] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#f09686] hover:scale-95 duration-100 transition-all'
          onClick={handleDelete}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
          Eliminar
        </button>
      </div>
      <h2 className='font-bold text-[#4A4A4A] text-3xl'>Ficha clínica</h2>
      <FichaClinica />

      {/* <div className='absolute'>
        <NotasProcedimiento procedimiento={{}} />
      </div> */}
    </div>
  )
}
