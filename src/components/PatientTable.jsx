import React, { useState } from 'react'
import { usePatient } from '../hooks/usePatient'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
import Loader from './basics/Loader'
import { SinDatos } from './basics/SinDatos'
import IconPatient from '../assets/patient-icon.svg'
import { Error } from './basics/Error'

export const PatientTable = () => {

  const { allPatients } = usePatient()
  const navigate = useNavigate()

  const columns = [
    {
      name: 'Nombre',
      selector: row => <div className='flex flex-row items-center gap-2'><img src={IconPatient}/><span className='font-medium'>{row.name[0].given[0] + ' ' + row.name[0].family}</span></div>,
      sortable: true
    },
    {
      name: 'Identificación',
      selector: row => row.identifier[0].value,
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
  if (allPatients.isError) return <Error />

  return (
    <div className='rounded-lg'>
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
        noDataComponent={<SinDatos />}
        progressPending={allPatients.isLoading}
        progressComponent={<Loader />}
      />
    </div>
  )
}
