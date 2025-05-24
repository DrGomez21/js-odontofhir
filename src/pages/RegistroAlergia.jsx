import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { addAlergia } from "../api/alergias/add-alergia.action"
import { useGetAlergiasByPatient, useAlergias } from "../hooks/useCodeSystem"

export const RegistroAlergia = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { id } = useParams()  // Recuperamos el id del paciente de la URL.
  const alergias = useGetAlergiasByPatient(id) // Obtenemos las alergias del paciente.
  const codigosAlergias = useAlergias() // Obtenemos los códigos de alergias.

  if (alergias.isLoading || codigosAlergias.isLoading) return <p>Cargando...</p>
  if (alergias.isError || codigosAlergias.isError) return <p>Error: {alergias.error.message}</p>
  if (alergias.data?.total === 0) return <p>No hay alergias registradas.</p>

  const onSubmit = (data) => {
    const alergia = JSON.parse(data.alergia)
    addAlergia(alergia, id)
  }

  return (
    <div className="grid grid-cols-2 gap-6 w-full p-20">

      <form
        className="flex flex-col gap-4 bg-white p-4 h-72 rounded-md shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >

        <h1 className="text-center font-semibold text-xl">Registro de alergias</h1>
        <label className="text-sm font-semibold">Nombre de la alergia</label>
        <select
          {...register("alergia", { required: true })}
          className="border rounded-md p-2"
        >
          <option value="">Seleccione una alergia</option>
          {codigosAlergias.data?.concept.map((alergia) => (
            <option key={alergia.code} value={JSON.stringify(alergia)}>
              {alergia.display}
            </option>
          ))}
        </select>
        {errors.alergia && <span className="text-red-500 text-xs">Seleccione una alergia</span>}

        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all">
          Registrar Alergia
        </button>

      </form>

      <div className="flex flex-col gap-4 bg-white p-4 h-72 rounded-md shadow-md">
          <h1 className="text-center font-semibold text-xl">Alergias del paciente</h1>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Código</th>
                <th className="px-4 py-2">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {alergias.data?.entry.map((alergia) => (
                <tr key={alergia.resource.id}>
                  <td className="border px-4 py-2">{alergia.resource.code.coding[0].code}</td>
                  <td className="border px-4 py-2">{alergia.resource.code.coding[0].display}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

    </div>
  )
}