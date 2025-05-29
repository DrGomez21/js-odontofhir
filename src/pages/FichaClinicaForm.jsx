import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import toast from "react-hot-toast";
import { useEncounter } from '../hooks/useEncounter'
import { FileText, Code, ChevronRight, ChevronLeft } from "lucide-react"
import { EncuentroCardSimple } from '../components/consultas/ConsultaCard'
import { generarCompositionYBundle } from '../utils/generarCompositionBundle'
import { getHallazgoByEncounterId } from "../api/hallazgos/get-hallazgo.action"
import { getProcedureByEncounterId } from "../api/procedure/get-procedure.action"
import { usePractitionerStore } from '../storage/practitionerStore'


export default function FichaClinicaForm() {
    const { id: patientId } = useParams()
    const { patientEncounter } = useEncounter(patientId)
    const practitioner = usePractitionerStore((state) => state.practitioner)

    const [encuentrosSeleccionados, setEncuentrosSeleccionados] = useState([])
    const [jsonGenerado, setJsonGenerado] = useState(null)

    if (patientEncounter.isLoading) return <p>Cargando encuentros...</p>
    if (patientEncounter.isError) return <p>Error al cargar encuentros</p>

    const [encuentrosDisponibles, setEncuentrosDisponibles] = useState([])


    useEffect(() => {
        if (patientEncounter.data?.entry) {
            const datos = patientEncounter.data.entry.map(({ resource }) => ({
                id: resource.id,
                fecha: resource.period?.start?.slice(0, 10),
                tipo: resource.class?.display || "Consulta",
                descripcion: `Estado: ${resource.status}`,
                resource // Guarda ya el recurso completo para compopo
            }))
            setEncuentrosDisponibles(datos)
        }
    }, [patientEncounter.data])

    const moverASeleccionados = () => {
        const seleccionados = document.querySelectorAll('#encuentros-disponibles input[type="checkbox"]:checked')
        const idsSeleccionados = Array.from(seleccionados).map(el => el.value)

        const nuevosSeleccionados = encuentrosDisponibles.filter(e => idsSeleccionados.includes(e.id))
        setEncuentrosSeleccionados([...encuentrosSeleccionados, ...nuevosSeleccionados])
        setEncuentrosDisponibles(encuentrosDisponibles.filter(e => !idsSeleccionados.includes(e.id)))
    }

    const moverADisponibles = () => {
        const seleccionados = document.querySelectorAll('#encuentros-seleccionados input[type="checkbox"]:checked')
        const idsSeleccionados = Array.from(seleccionados).map(el => el.value)

        const nuevosDisponibles = encuentrosSeleccionados.filter(e => idsSeleccionados.includes(e.id))
        setEncuentrosDisponibles([...encuentrosDisponibles, ...nuevosDisponibles])
        setEncuentrosSeleccionados(encuentrosSeleccionados.filter(e => !idsSeleccionados.includes(e.id)))
    }

    const generarFichaClinica = async () => {
        if (!practitioner?.data?.id) {
            toast.warning("No hay profesional conectado.")
            return
        }

        try {
            const { composition, bundle } = await generarCompositionYBundle({
                patientId,
                encuentrosSeleccionados: encuentrosSeleccionados.map(e => e.resource),
                getHallazgos: async (encId) => {
                    const res = await getHallazgoByEncounterId(encId)
                    return res.entry?.map(e => e.resource) || []
                },
                getProcedimientos: async (encId) => {
                    const res = await getProcedureByEncounterId(encId)
                    return res.entry?.map(e => e.resource) || []
                },
                practitionerId: practitioner.data.id
            })

            setJsonGenerado(JSON.stringify(bundle, null, 2))
            toast.success("Ficha clínica generada con éxito")
        } catch (error) {
            console.error(error)
            toast.error("Error al generar la ficha clínica")
        }
    }


    return (
    <div className="container mx-auto p-6 bg-white min-h-screen">
        <h1 className="font-bold text-[#4A4A4A] text-3xl mb-6">Crear Ficha Clínica Odontológica</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {/* Panel izquierdo: disponibles */}
        <div className="bg-white border border-[#4a4a4a] rounded-lg p-4 shadow-sm col-span-1">
            <h2 className="font-bold text-[#4A4A4A] text-xl mb-4">Encuentros Disponibles</h2>
            <div id="encuentros-disponibles" className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            {encuentrosDisponibles.map((encuentro) => (
                <div key={encuentro.id} className="flex items-start gap-3">
                <input type="checkbox" value={encuentro.id} className="mt-1" />
                <div className="flex-1">
                    <EncuentroCardSimple encounter={encuentro.resource} />
                </div>
                </div>
            ))}
            {encuentrosDisponibles.length === 0 && (
                <p className="text-gray-500 italic text-center py-4">No hay encuentros disponibles</p>
            )}
            </div>
        </div>

        {/* Botones al centro */}
        <div className="flex flex-col justify-center items-center gap-4 col-span-1 lg:col-span-1">
            <button
            onClick={moverASeleccionados}
            className="bg-cyan-200 hover:bg-cyan-300 p-2 rounded-full hover:scale-95 transition-all duration-100"
            aria-label="Mover a seleccionados"
            >
            <ChevronRight className="h-6 w-6 text-[#4A4A4A]" />
            </button>
            <button
            onClick={moverADisponibles}
            className="bg-cyan-200 hover:bg-cyan-300 p-2 rounded-full hover:scale-95 transition-all duration-100"
            aria-label="Mover a disponibles"
            >
            <ChevronLeft className="h-6 w-6 text-[#4A4A4A]" />
            </button>
        </div>

        {/* Panel derecho: seleccionados */}
        <div className="bg-white border border-[#4a4a4a] rounded-lg p-4 shadow-sm col-span-1">
            <h2 className="font-bold text-[#4A4A4A] text-xl mb-4">Encuentros Seleccionados</h2>
            <div id="encuentros-seleccionados" className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            {encuentrosSeleccionados.map((encuentro) => (
                <div key={encuentro.id} className="flex items-start gap-3">
                <input type="checkbox" value={encuentro.id} className="mt-1" />
                <div className="flex-1">
                    <EncuentroCardSimple encounter={encuentro.resource} />
                </div>
                </div>
            ))}
            {encuentrosSeleccionados.length === 0 && (
                <p className="text-gray-500 italic text-center py-4">No hay encuentros seleccionados</p>
            )}
            </div>
        </div>
        </div>

        {/* Botones de acción */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <button
            onClick={generarFichaClinica}
            className="flex items-center gap-2 bg-cyan-200 hover:bg-cyan-300 text-[#4A4A4A] font-bold py-3 px-6 rounded-lg hover:scale-95 transition-all duration-100"
        >
            <FileText className="h-5 w-5" />
            Generar Ficha Clínica
        </button>

        </div>

        {/* Área de JSON generado */}
        {jsonGenerado && (
        <div className="mt-8">
            <h2 className="font-bold text-[#4A4A4A] text-xl mb-4">Bundle JSON Generado</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">{jsonGenerado}</pre>
        </div>
        )}
    </div>
    )

}