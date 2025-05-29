import { useState } from 'react'
import { useHallazgos, useProcedimientosOdontologicos } from '../hooks/useCodeSystem'
import { Error } from './basics/Error'
import { useForm } from 'react-hook-form'
import { useEncounter, useMutateEncounterWithCondition, useMutateEncounterWithProcedure } from '../hooks/useEncounter'
import { Loader2Icon, LoaderCircle, PanelLeftClose, Save, SquareCheckIcon } from 'lucide-react'
import { encounterMapper } from '../infraestructure/mappers/encounter.mapper'
import { validateResource } from '../api/fhir.validate'
import { ConsultaCard } from './consultas/ConsultaCard'
import { HallazgoCard } from './cards/HallazgoCard'
import { useHallazgoByPatientAndTooth, useHallazgoMutation } from '../hooks/useHallazgo'
import { hallazgoMapper } from '../infraestructure/mappers/hallazgo.mapper'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAddProcedure, useGetAllProcedures } from '../hooks/useProcedure'
import { procedureMapper } from '../infraestructure/mappers/procedure.mapper'
import { usePractitionerStore } from "../storage/practitionerStore"; //Traje el storage de practititoner

export const Encounter = ({ patientId }) => {

  // Necesitamos traer las consultas de este paciente.
  const { patientEncounter, mutate } = useEncounter(patientId)
  //Agregue PractitionerID del store
  const { data: practitionerStore } = usePractitionerStore((state) => state.practitioner);
  const practitionerId = practitionerStore?.id;

  // Hora actual.
  const now = new Date().toISOString().slice(0, 10)
  const navigate = useNavigate()

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
    const encounter = encounterMapper(data, patientId, practitionerId)
    if (!encounter) return toast.error('Ocurrió un error, vuelva a intentar guardar la consulta.')
    const valido = validateResource('/Encounter', encounter)
    if (!valido) {
      toast.error('No válido unu')
      return
    } else {
      mutate(encounter, {
        onSuccess: (newEncounter) => {
          toast.success('Correcto')
          navigate(`/patient/${patientId}/consulta/${newEncounter.id}`)
        },
        onError: () => {
          toast.error('Ocurrió un error')
        }
      })
    }
  }

  if (patientEncounter.isLoading) return <p>Cargando...</p>
  if (!patientEncounter.isLoading && patientEncounter.isError) return <Error />

  return (
    <div className='p-4'>
      {/* Header */}
      <div className='flex relative justify-between items-center mb-2'>
        <h1 className='flex font-medium text-2xl'>Consultas {patientEncounter.isFetching && <Loader2Icon className='animate-spin ml-2' />} </h1>
        <button
          className='flex items-center justify-center w-8 h-8 border-2 border-[#4a4a4a] rounded-md bg-cyan-200
          hover:cursor-pointer hover:scale-95 transition-all duration-100'
          onClick={onClickListen}
        >
          {mostrarCreacionConsulta ? 'X' : '+'}
        </button>
      </div>

      {/* En este div está la lista de consultas. */}
      <div className='max-h-64 min-h-0 overflow-y-auto py-2'>
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

        {!patientEncounter.data.entry && (<p>No hay consultas previas.</p>)}

        {patientEncounter.data.entry && patientEncounter.data.entry
          .sort((a, b) => new Date(b.resource.period.start) - new Date(a.resource.period.start))
          .map(({ resource }) => (
            <ConsultaCard key={resource.id} encounter={resource} paciente={patientId} />
          ))}
      </div>
    </div>
  )
}

export const Condition = ({ patientId, diente, consultaId, onNewHallazgo }) => {

  // Estado para mostrar o no el form de creación de encuentro.
  const [mostrarCreacionHallazgo, setMostrarCreacionHallazgo] = useState(false)

  //Agregue PractitionerID del store
  const { data: practitionerStore } = usePractitionerStore((state) => state.practitioner);
  const practitionerId = practitionerStore?.id;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm()


  // Tendremos que registrar un hallazgo al servidor.
  // Para eso, usaremos el hook useHallazgos para obtener los hallazgos disponibles.
  // Luego, al enviar el formulario, se registrará el hallazgo seleccionado.
  const opcionesHallazgo = useHallazgos()

  const hallazgoByPatientAndTooth = useHallazgoByPatientAndTooth(patientId, diente.code)
  const hallazgoMutation = useHallazgoMutation(patientId)
  const patchEncounter = useMutateEncounterWithCondition()
  
  const onSubmit = (data) => {
    const hallazgoResource = hallazgoMapper(patientId, consultaId, practitionerId, diente, data.hallazgo)
    hallazgoMutation.mutate(hallazgoResource, {
      onSuccess: (nuevoHallazgo) => {
        onNewHallazgo(diente.numberISO)
        // Encadenamos la segunda mutación.
        patchEncounter.mutate({
          encounterId: consultaId,
          conditionRef: `Observation/${nuevoHallazgo.id}`
        }, {
          onSuccess: () => toast.success('Actualizado el encuentro'),
          onError: () => toast.error('Falló la UPDATE')
        })
        toast.success('Hallazgo registrado', { position: 'bottom-left' })
      },
      onError: () => toast.error('Error al registrar el hallazgo')
    })
  }


  if (opcionesHallazgo.isLoading || hallazgoByPatientAndTooth.isLoading) return <p>Cargando...</p>
  if (opcionesHallazgo.isError || hallazgoByPatientAndTooth.isLoading) return <Error />

  return (
    <div className="mt-4">
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h1 className='font-medium text-2xl'>Hallazgos</h1>
        {consultaId && (
          <button
            className='flex items-center justify-center w-8 h-8 border-2 border-[#4a4a4a] rounded-md bg-cyan-200
          hover:cursor-pointer hover:scale-95 transition-all duration-100'
            onClick={() => setMostrarCreacionHallazgo(!mostrarCreacionHallazgo)}
          >
            {mostrarCreacionHallazgo ? 'X' : '+'}
          </button>
        )}
      </div>

      {
        mostrarCreacionHallazgo && (
          <form onSubmit={handleSubmit(onSubmit)} className='mt-2 mb-2'>
            <select
              className='w-full py-2 px-1 border-2 border-[#4a4a4a] rounded-md'
              {...register('hallazgo', { required: true })}
            >
              {opcionesHallazgo.data.map((h) => (
                <option key={h.code} value={h.code}>{h.display}</option>
              ))}
            </select>
            <button
              type='submit'
              className='px-4 py-2 border-2 mt-2 w-full border-[#4a4a4a] bg-cyan-200 text-[#4a4a4a] text-sm font-medium rounded hover:cursor-pointer hover:scale-95 transition-all duration-100 disabled:opacity-50'
            >
              {hallazgoMutation.isPending ? (
                <p className='flex items-center justify-center gap-2'><Loader2Icon className='animate-spin' />Guardando...</p>
              ) : (
                <p className='flex items-center justify-center gap-2'><Save />Guardar hallazgo</p>
              )}
            </button>
            {hallazgoMutation.isSuccess ? <div className='mt-1 w-full border-2 border-green-400 rounded-sm text-green-400 bg-green-200 px-2 py-2 text-center flex gap-2'>¡Hallazgo registrado!<SquareCheckIcon className='text-green-400' /></div> : null}
            {hallazgoMutation.isError ? <div className='mt-1 w-full border-2 border-red-400 rounded-sm text-red-400 bg-red-200 px-2 py-2 text-center flex gap-2'>{hallazgoMutation.error.message}<SquareCheckIcon className='text-red-400' /></div> : null}
          </form>
        )
      }

      {!hallazgoByPatientAndTooth.data.entry && <p>No hay hallazgos en este diente.</p>}
      {
        hallazgoByPatientAndTooth.data?.entry?.map(({ resource }) => (
          <HallazgoCard key={resource.id} condition={resource} />
        ))
      }
    </div>
  )
}

export const Procedure = ({ patientId, diente, consultaId, onNewProcedure }) => {
  
  // Estado para mostrar o no el form de creación de procedimiento odontológico.
  const [mostrarCreacionProcedimiento, setMostrarCreacionProcedimiento] = useState(false)

  //Agregue PractitionerID del store
  const { data: practitionerStore } = usePractitionerStore((state) => state.practitioner);
  const practitionerId = practitionerStore?.id;

  // Instaciamos el hook useForm para manejar el formulario.
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm()
  
  // Vamos a traernos todos los procedimientos disponibles.
  const opcionesProcedimiento = useProcedimientosOdontologicos()
  // Actualizar el estado de la consulta con el nuevo procedimiento.
  const updateEncounter = useMutateEncounterWithProcedure()

  // Traemos el hook para registrar un procedimiento odontológico.
  const procedimientoMutation = useAddProcedure()
  const procedimientosByPatient = useGetAllProcedures()

  const onSubmit = (data) => {
    const p = JSON.parse(data.procedimiento)
    const procedimientoResource = procedureMapper({patientId:patientId, practitionerId: practitionerId, diente:diente, encounterId:consultaId, procedimiento:p})
    
    // TODO: VALIDAR EL RECURSO
    if (!procedimientoResource) return toast.error('Ocurrió un error, vuelva a intentar guardar el procedimiento.')
    
    // insertamos el procedimiento en el servidor.
    procedimientoMutation.mutate(procedimientoResource, {
      onSuccess: (nuevoProcedimiento) => {
        // Encadenamos la segunda mutación.
        updateEncounter.mutate({
          encounterId: consultaId,
          procedureRef: `Procedure/${nuevoProcedimiento.id}`
        }, {
          onSuccess: () => {
            toast.success('Actualizado el encuentro')
          },
          onError: () => {
            toast.error('Falló la actulización del encuentro')
          },
        }
      ),
        toast.success('Procedimiento registrado', { position: 'bottom-left' })
      },
      onError: () => {
        toast.error('Error al registrar el procedimiento', {position: 'bottom-left'})
      }
    })
  }

  return (
    <div>
      {/* Header */}
      <div className='flex justify-between items-center mt-6'>
        <h1 className='font-medium text-2xl'>Procedimientos</h1>
        {consultaId && (
          <button
            className='flex items-center justify-center w-8 h-8 border-2 border-[#4a4a4a] rounded-md bg-cyan-200
          hover:cursor-pointer hover:scale-95 transition-all duration-100'
            onClick={() => setMostrarCreacionProcedimiento(!mostrarCreacionProcedimiento)}
          >
            {mostrarCreacionProcedimiento ? 'X' : '+'}
          </button>
        )}
      </div>

      {/* Abrimos el formulario */}
      {mostrarCreacionProcedimiento && (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-2 mb-2'>
          <select
            className='w-full py-2 px-1 border-2 border-[#4a4a4a] rounded-md'
            {...register('procedimiento', { required: true })}
          >
            {opcionesProcedimiento.data.map((p) => (
              <option key={p.code} value={JSON.stringify(p)}>{p.display}</option>
            ))}
          </select>
          <button
            type='submit'
            disabled={procedimientoMutation.isPending}
            className='px-4 py-2 border-2 mt-2 w-full border-[#4a4a4a] bg-cyan-200 text-[#4a4a4a] text-sm font-medium rounded hover:cursor-pointer hover:scale-95 transition-all duration-100 disabled:opacity-50'
          >
            {procedimientoMutation.isPending ? (
              <p className='flex items-center justify-center gap-2'><Loader2Icon className='animate-spin' />Guardando...</p>
            ) : (
              <p className='flex items-center justify-center gap-2'><Save />Guardar procedimiento</p>
            )}
          </button>
        </form>
      )}

      {!procedimientosByPatient.data?.entry && <p>No hay procedimientos en este diente.</p>}
      {
        procedimientosByPatient.data?.entry && <p>Añadir procedimiento.</p>
      }

    </div>
  )
}

export const Sidebar = ({ diente, patient, consulta, onClose, onNewHallazgo, onNewProcedure }) => {
  return (
    <>
      {/* Overlay oscuro */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-120 bg-white z-50 p-6 overflow-y-auto">
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
          {/* <Encounter patientId={patient.id} /> */}
          <Condition patientId={patient} diente={diente} consultaId={consulta} onNewHallazgo={onNewHallazgo} />
          <Procedure patientId={patient} diente={diente} consultaId={consulta} onNewProcedure={onNewHallazgo} />
        </div>
      </aside>
    </>
  )
}
