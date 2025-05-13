import { useForm } from "react-hook-form"
import { useParams, useSearchParams } from "react-router-dom"
import { addAlergia } from "../api/alergias/add-alergia.action"

export const RegistroAlergia = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { id } = useParams()  // Recuperamos el id del paciente de la URL.

  const onSubmit = (data) => {
    addAlergia(
      {
        clinicalStatus: 'active',
        type: 'allergy',
        code: '294505008',
        display: 'Alergia a amoxilina (hallazgo)',
      },
      id
    )
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">

      <form onSubmit={handleSubmit(onSubmit)}>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md cursor-pointer">
          Registrar Alergia
        </button>

      </form>

    </div>
  )
}