import React from 'react'
import { usePatient } from '../hooks/usePatient'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

export const PatientTable = () => {

  const { patients, entries, isLoading, isError, error, isSuccess } = usePatient()
  const navigate = useNavigate()

  const columns = [
    {
      name: 'Nombre',
      selector: row => row.name[0].given[0],
      sortable: true
    },
    {
      name: 'Género',
      selector: row => translateGender(row.gender)
    },
    {
      name: 'Fecha de Nacimiento',
      selector: row => row.birthDate
    }
  ]

  // Estilos personalizados para la tabla
  // TODO: Volver a mirarlo, porque no está funcionando.
  const customStyle = {
    header: {
      style: {
        fontSize: '2rem',
        color: 'green'
      }
    },
  }

  // Funciones.
  const translateGender = (gender) => {
    return gender === 'male' ? 'Masculino' : 'Femenino'
  }

  const goToProfile = (patientId) => {
    navigate(`/patient-profile/${patientId}`)
  }

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Error {error.message}...</p>

  if (isSuccess) {
    console.log(entries)
    console.log(patients)
  }

  return (
    <DataTable 
      columns={columns}
      data={patients}
      customStyles={customStyle}
      pagination
      fixedHeader
      onRowClicked={patient => goToProfile(patient.id)}
      highlightOnHover
      pointerOnHover
    />
  )
}
