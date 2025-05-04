import React, { useState } from 'react'
import { useCodeSystem } from '../hooks/useCodeSystem'
import { Error } from './basics/Error'
import { useForm } from 'react-hook-form'
import { useEncounter } from '../hooks/useEncounter'
import { LoaderCircle, PanelLeftClose, Save } from 'lucide-react'
import { encounterMapper } from '../infraestructure/mappers/encounter.mapper'
import toast from 'react-hot-toast'
import { validateResource } from '../api/fhir.validate'
import { ConsultaCard } from './consultas/ConsultaCard'

const Encounter = ({ patientId }) => {

  // Necesitamos traer las consultas de este paciente.
  const { patientEncounter, mutate } = useEncounter(patientId)

  // Hora actual.
  const now = new Date().toISOString().slice(0, 10)
  const options = { timeZone: 'UTC', year: 'numeric', month: 'numeric', day: 'numeric' };

  const statusOptions = [
    { value: 'planned', label: 'Planned' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'onleave', label: 'On Leave' },
    { value: 'finished', label: 'Finished' },
    { value: 'cancelled', label: 'Cancelled' },
  ]

  // Hook para usar el formulario.
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      start: now,
      end: '',
      status: 'in-progress',
    }
  })

  // Estado para mostrar o no el form de creación de encuentro.
  const [mostrarCreacionConsulta, setMostrarCreacionConsulta] = useState(false)

  const onClickListen = () => {
    setMostrarCreacionConsulta(!mostrarCreacionConsulta)
  }

  const onSubmit = (data) => {
    const encounter = encounterMapper(data, patientId, 152)
    if (!encounter) return toast.error('Ocurrió un error, vuelva a intentar guardar la consulta.')
    const valido = validateResource('/Encounter', encounter)
    if (!valido) {
      toast.error('No válido unu')
      return
    } else {
      mutate(encounter)
    }
  }

  if (patientEncounter.isLoading) return <p>Cargando...</p>
  if (!patientEncounter.isLoading && patientEncounter.isError) return <Error />
  if (!patientEncounter.data.entry || patientEncounter.data.entry.length === 0) return <p>No hay consultas previas.</p>

  return (
    <div>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h1 className='font-medium text-2xl'>Consultas</h1>
        <button
          className='flex items-center justify-center w-8 h-8 border-2 border-[#4a4a4a] rounded-md bg-cyan-200
          hover:cursor-pointer hover:scale-95 transition-all duration-100'
          onClick={onClickListen}
        >
          {mostrarCreacionConsulta ? 'X' : '+'}
        </button>
      </div>

      {/* En este div está la lista de consultas. */}
      <div className='max-h-52 min-h-0 overflow-y-auto py-2'>
        {/* Me gustaría poner acá el formulario para agregar consulta nueva.
        Que esté oculto y, al apretar el botón, se muestre */}
        {
          mostrarCreacionConsulta && (
            <form className='p-1' onSubmit={handleSubmit(onSubmit)}>
              <div className='grid grid-cols-2 gap-2'>
                {/* Inicio */}
                <div className='block'>
                  <label className="mb-1 font-medium text-sm">
                    Inicio
                    <input type="date"
                      {...register('start', { required: 'La fecha de inicio es requerida' })}
                      className={`w-full border rounded-md px-4 py-2 ${errors.start ? 'border-red-400' : 'border-[#4a4a4a]'
                        }`}
                    />
                  </label>
                  {errors.start && (
                    <span className='text-xs text-red-400 font-light'>{errors.start.message}</span>
                  )}
                </div>

                {/* Fecha fin */}
                <label className="block mb-1 font-medium text-sm">
                  Fin
                  <input
                    type='date'
                    {...register('end')}
                    className='w-full border border-[#4a4a4a] rounded-md px-4 py-2'
                  />
                </label>
              </div>

              {/* Estado de la consulta */}
              <div>
                <label className="block mb-1 font-medium">Estado de la consulta</label>
                <select
                  {...register('status', { required: true })}
                  className="w-full border-gray-300 border rounded px-3 py-2"
                >
                  {statusOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Actions */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 border-2 border-[#4a4a4a] bg-cyan-200 text-[#4a4a4a] text-sm font-medium rounded hover:cursor-pointer hover:scale-95 transition-all duration-100 disabled:opacity-50"
                >
                  {isSubmitting ? (<p className='flex items-center justify-center gap-2'><LoaderCircle />Guardando consulta</p>) : (<p className='flex items-center justify-center gap-2'><Save />Guardar consulta</p>)}
                </button>
              </div>
              <div className='bg-[#4a4a4a] h-0.5 w-full mt-2' />
            </form>
          )
        }
        {patientEncounter.data.entry.map(({ resource }) => (
          <ConsultaCard key={resource.id} encounter={resource} />
        ))}
      </div>

    </div>
  )
}

const Condition = () => {

  // Aquí puedes usar el hook useForm de react-hook-form para manejar el formulario
  const {
    register,
    handleSubmit,
    watch
  } = useForm()

  // Tendremos que registrar un hallazgo al servidor.
  // Para eso, usaremos el hook useCodeSystem para obtener los hallazgos disponibles.
  // Luego, al enviar el formulario, se registrará el hallazgo seleccionado.
  const { hallazgos } = useCodeSystem()

  const [hallazgo, setHallazgo] = useState(null)

  if (hallazgos.isLoading) return <Loader />
  if (hallazgos.isError) return <Error />

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Condición</h3>
      <p className="text-sm text-gray-600">Descripción de la condición.</p>
      {
        hallazgos.data.map((hallazgo) => (
          <div key={hallazgo.code} className="mb-2">
            <h4 className="text-md">{hallazgo.display}</h4>
            <p className="text-sm text-gray-600">{hallazgo.definition}</p>
          </div>
        ))
      }
    </div>
  )
}

export const Sidebar = ({ diente, patient, onClose }) => {
  return (
    <>
      {/* Overlay oscuro */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-120 bg-white z-50 p-6 overflow-auto">
        <div className='flex w-full justify-end'>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black hover:cursor-pointer"
          >
            <PanelLeftClose />
          </button>
        </div>

        <h2 className="text-lg font-semibold">
          Diente {diente.numberISO}
        </h2>
        <p className="text-sm font-light text-gray-600 mb-6">
          {diente.display}
        </p>

        {/* formularios FHIR */}
        <div>
          <Encounter patientId={patient.id} />
        </div>
      </aside>
    </>
  )
}
