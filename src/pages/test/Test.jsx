import React, { useState } from 'react'
import { useCodeSystem } from '../../hooks/useCodeSystem'

export const Test = () => {

  const { departamentosDelParaguay, nacionalidades } = useCodeSystem()
  const [showCiudades, setShowCiudades] = useState(false)

  if (nacionalidades.isLoading) {
    return <div>Cargando departamentos...</div>
  }

  const handleCiudadesClick = () => {
    setShowCiudades(!showCiudades)
    console.log(nacionalidades.data)
  }

  return (
    <div>
      <h1>Test API</h1>
      <button onClick={handleCiudadesClick}>
        Mostrar departamentos
      </button>
      {showCiudades && (
        <ul>
          {nacionalidades.data.map((departamento) => (
            <li key={departamento.code}>
              {departamento.display}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
