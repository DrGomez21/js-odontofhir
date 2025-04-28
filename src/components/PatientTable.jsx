import React, { useState } from 'react'
import { usePatient } from '../hooks/usePatient'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import Loader from './basics/Loader'

export const PatientTable = () => {

  const { allPatients } = usePatient()

  const { patients, entries, isLoading, isError, error, isSuccess } = usePatient()
  const navigate = useNavigate()

  const columns = [
    {
      name: 'Nombre',
      selector: row => (row.name[0].given[0] + ' ' + row.name[0].family),
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
  const customStyles = {
    // Estilos para la tabla principal
    table: {
      style: {
        backgroundColor: '#ffffff',
      },
    },
    // Estilos para la fila del encabezado
    headRow: {
      style: {
        backgroundColor: '#B3E5FC',
      },
    },
    // Estilos para cada celda del encabezado
    headCells: {
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#4A4A4A',
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    // Estilos para las filas
    rows: {
      style: {
        minHeight: '50px',
        fontSize: '16px',
        fontWeight: 'semibold',
        // Otros estilos generales para cada fila
      },
      // Estilos para filas "striped" (alternadas)
      stripedStyle: {
        backgroundColor: '#f9f9f9',
      },
    },
    // Estilos para las celdas de datos
    cells: {
      style: {
        padding: '12px',
      },
    },
  };

  // Funciones.
  const translateGender = (gender) => {
    return gender === 'male' ? 'Masculino' : 'Femenino'
  }

  const goToProfile = (patientId) => {
    navigate(`/patient-profile/${patientId}`)
  }

  if (allPatients.isLoading) return <Loader />
  if (allPatients.isError) return <p>Ocurrió un error</p>

  return (
    <div>
      <DataTable
        className='rounded-xl w-full'
        columns={columns}
        data={allPatients.data}
        customStyles={customStyles}
        pagination
        fixedHeader
        onRowClicked={patient => goToProfile(patient.id)}
        highlightOnHover
        pointerOnHover
        noDataComponent={<div className='flex justify-center items-center h-full w-full'>No hay pacientes registrados</div>}
        progressPending={allPatients.isLoading}
        progressComponent={<Loader />}
      />
    </div>
  )
}
