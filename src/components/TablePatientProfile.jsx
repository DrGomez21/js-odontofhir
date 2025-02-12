import React from 'react'
import DataTable from 'react-data-table-component'

export const TablePatientProfile = () => {

  const columns = [
    {
      name: 'Fecha',
      selector: row => row.fecha,
      sortable: true
    },
    {
      name: 'Diente',
      selector: row => row.diente
    },
    {
      name: 'Procedimiento',
      selector: row => row.procedimiento
    },
    {
      name: 'Estado',
      selector: row => row.estado
    },
    {
      name: 'Notas',
      selector: row => row.notas
    },
  ]

  const data = [
    {
      fecha: '24/10/2024',
      diente: 13,
      procedimiento: 'Carie',
      estado: 'Finalizado',
      notas: 'Ver notas'
    },
    {
      fecha: '24/10/2024',
      diente: 13,
      procedimiento: 'Carie',
      estado: 'Finalizado',
      notas: 'Ver notas'
    },
    {
      fecha: '24/10/2024',
      diente: 13,
      procedimiento: 'Carie',
      estado: 'Finalizado',
      notas: 'Ver notas'
    },
    {
      fecha: '24/10/2024',
      diente: 13,
      procedimiento: 'Carie',
      estado: 'Finalizado',
      notas: 'Ver notas'
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      fixedHeader
      highlightOnHover
      pointerOnHover
    />
  )
}
