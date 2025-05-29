import { v4 as uuidv4 } from 'uuid'
import { getPatientByIdAction } from '../api/patients/get-patient.action'
import { getPractitionerByIdAction } from '../api/practitioner/get-practitioner'

export async function generarCompositionYBundle({
  patientId,
  encuentrosSeleccionados,
  getHallazgos,
  getProcedimientos,
  practitionerId
}) {
  const fechaActual = new Date().toISOString()
  const compositionId = uuidv4()

  const patient = await getPatientByIdAction(patientId)
  const practitioner = await getPractitionerByIdAction(practitionerId)

  const composition = {
    resourceType: "Composition",
    id: compositionId,
    status: "final",
    type: {
      coding: [
        {
          system: "http://loinc.org",
          code: "34133-9",
          display: "Summarization of Episode Note"
        }
      ]
    },
    subject: { reference: `urn:uuid:paciente-${patient.id}` },
    author: [{ reference: `urn:uuid:odontologo-${practitioner.id}` }],
    date: fechaActual,
    title: "Ficha Clínica Odontológica",
    section: []
  }

  const bundle = {
    resourceType: "Bundle",
    type: "document",
    id: uuidv4(),
    timestamp: fechaActual,
    entry: [
      {
        fullUrl: `urn:uuid:ficha-${composition.id}`,
        resource: composition
      },
      {
        fullUrl: `urn:uuid:paciente-${patient.id}`,
        resource: patient
      },
      {
        fullUrl: `urn:uuid:odontologo-${practitioner.id}`,
        resource: practitioner
      }
    ]
  }

  for (const encounter of encuentrosSeleccionados) {
    const hallazgos = await getHallazgos(encounter.id)
    const procedimientos = await getProcedimientos(encounter.id)

    composition.section.push({
      title: `Consulta del ${encounter.period?.start?.slice(0, 10) || "Fecha no disponible"}`,
      entry: [
        { reference: `urn:uuid:encuentro-${encounter.id}` },
        ...hallazgos.map(h => ({ reference: `urn:uuid:hallazgo-${h.id}` })),
        ...procedimientos.map(p => ({ reference: `urn:uuid:procedimiento-${p.id}` }))
      ]
    })

    bundle.entry.push({
      fullUrl: `urn:uuid:encuentro-${encounter.id}`,
      resource: encounter
    })

    hallazgos.forEach(h => {
      bundle.entry.push({
        fullUrl: `urn:uuid:hallazgo-${h.id}`,
        resource: h
      })
    })

    procedimientos.forEach(p => {
      bundle.entry.push({
        fullUrl: `urn:uuid:procedimiento-${p.id}`,
        resource: p
      })
    })
  }

  return { composition, bundle }
}
