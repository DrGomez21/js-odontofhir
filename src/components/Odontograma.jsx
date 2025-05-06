import React, { useState, useEffect } from 'react'
import { Diente } from './Diente';
import { Sidebar } from './Sidebar';
import { useHallazgosByPatient } from '../hooks/useHallazgo';
import { DienteConHallazgo } from './DienteConHallazgo';
import { Loader2Icon } from 'lucide-react';

export const Odontograma = ({ patient }) => {

  const dientesSuperiores = [
    {
      display: 'Incisivo central superior derecho permanente completo',
      numberISO: '11',
      code: '13008OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo lateral superior derecho permanente completo',
      numberISO: '12',
      code: '13007OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Canino superior derecho permanente completo',
      numberISO: '13',
      code: '13006OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer premolar superior derecho permanente completo',
      numberISO: '14',
      code: '13005OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo premolar superior derecho permanente completo',
      numberISO: '15',
      code: '13004OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer molar superior derecho permanente completo',
      numberISO: '16',
      code: '13003OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo molar superior derecho permanente completo',
      numberISO: '17',
      code: '13002OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Tercer molar superior derecho permanente completo',
      numberISO: '18',
      code: '13001OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo central superior izquierdo permanente completo',
      numberISO: '21',
      code: '13009OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo lateral superior izquierdo permanente completo',
      numberISO: '22',
      code: '13010OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Canino superior izquierdo permanente completo',
      numberISO: '23',
      code: '13011OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer premolar superior izquierdo permanente completo',
      numberISO: '24',
      code: '13012OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo premolar superior izquierdo permanente completo',
      numberISO: '25',
      code: '13013OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer molar superior izquierdo permanente completo',
      numberISO: '26',
      code: '13014OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo molar superior izquierdo permanente completo',
      numberISO: '27',
      code: '13015OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Tercer molar superior izquierdo permanente completo',
      numberISO: '28',
      code: '13016OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    }
  ]

  const dientesInferiores = [
    {
      display: 'Incisivo central inferior derecho permanente completo',
      numberISO: '41',
      code: '13025OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo lateral inferior derecho permanente completo',
      numberISO: '42',
      code: '13026OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Canino inferior derecho permanente completo',
      numberISO: '43',
      code: '13027OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer premolar inferior derecho permanente completo',
      numberISO: '44',
      code: '13028OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo premolar inferior derecho permanente completo',
      numberISO: '45',
      code: '13029OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer molar inferior derecho permanente completo',
      numberISO: '46',
      code: '13030OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo molar inferior derecho permanente completo',
      numberISO: '47',
      code: '13031OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Tercer molar inferior derecho permanente completo',
      numberISO: '48',
      code: '13032OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Tercer molar inferior izquierdo permanente completo',
      numberISO: '38',
      code: '13017OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo molar inferior izquierdo permanente completo',
      numberISO: '37',
      code: '13018OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer molar inferior izquierdo permanente completo',
      numberISO: '36',
      code: '13019OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Segundo premolar inferior izquierdo permanente completo',
      numberISO: '35',
      code: '13020OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Primer premolar inferior izquierdo permanente completo',
      numberISO: '34',
      code: '13021OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Canino inferior izquierdo permanente completo',
      numberISO: '33',
      code: '13022OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo lateral inferior izquierdo permanente completo',
      numberISO: '32',
      code: '13023OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
    {
      display: 'Incisivo central inferior izquierdo permanente completo',
      numberISO: '31',
      code: '13024OF',
      system: `https://odontofhir.py/fhir/CodeSystem/AnatomiaDental-OdontoFHIR-1`,
    },
  ];

  // Combina y marca posición para poder renderizar superiores/inferiores
  const initialDientes = [
    ...dientesSuperiores.map(d => ({ ...d, position: 'arriba', estado: null })),
    ...dientesInferiores.map(d => ({ ...d, position: 'abajo', estado: null })),
  ]

  const [dientes, setDientes] = useState(initialDientes) // Estado para manejar todos los dientes.
  const [selectedDiente, setSelectedDiente] = useState(null) // Diente clickeado para abrir el sidebar

  // Hallazgos clínicos de un paciente.
  const hallazgosByPatient = useHallazgosByPatient(patient.id)

  // Cuando llegan los hallazgos del servidor, inicializa el estado de 'estado'
  useEffect(() => {
    if (!hallazgosByPatient.data?.entry) return
    setDientes(dientes =>
      dientes.map(d => {
        const encontrado = hallazgosByPatient.data.entry.some(
          ({ resource }) =>
            resource.bodySite?.[0]?.coding?.some(c => c.code === d.code)
        )
        return { ...d, estado: encontrado ? 'hallazgo' : null }
      })
    )
  }, [hallazgosByPatient.data])

  // Callback para actualizar un diente tras un nuevo hallazgo
  const handleNewHallazgo = numberISO => {
    setDientes(dientes =>
      dientes.map(d =>
        d.numberISO === numberISO ? { ...d, estado: 'hallazgo' } : d
      )
    )
  }

  // Renderizado de cada diente según su estado
  const renderDiente = d => {
    const props = {
      key: d.numberISO,
      diente: d,
      onClick: () => setSelectedDiente(d) // Tratar el click de un diente.
    }
    return d.estado === 'hallazgo'
      ? <DienteConHallazgo {...props} />
      : <Diente {...props} />
  }

  const sidebarClose = () => setSelectedDiente(null)

  if (hallazgosByPatient.isLoading) return <p>Cargando odontograma...</p>
  if (hallazgosByPatient.isError) return <p>Error en el odontograma...</p>

  return (
    <div className='flex-col relative p-4 bg-white rounded-lg shadow-lg'>

      {hallazgosByPatient.isFetching && <div><Loader2Icon className='absolute right-2 animate-spin' /></div>}

      <div className='flex-1'>
        {/* Dientes superiores */}
        <div className='flex flex-wrap justify-center mb-8'>
          {dientes.filter(d => d.position === 'arriba').map(renderDiente)}
        </div>

        {/* Dientes inferiores */}
        <div className='flex flex-wrap justify-center'>
          {dientes.filter(d => d.position === 'abajo').map(renderDiente)}
        </div>
      </div>

      {selectedDiente && (
        <Sidebar
          diente={selectedDiente}
          patient={patient}
          onClose={sidebarClose}
          onNewHallazgo={handleNewHallazgo}
        />
      )}
    </div>
  )
}
