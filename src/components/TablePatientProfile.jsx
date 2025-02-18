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

  return (
    <div className='rounded-xl'>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        fixedHeader
        highlightOnHover
        pointerOnHover
      />
    </div>
  )
}
