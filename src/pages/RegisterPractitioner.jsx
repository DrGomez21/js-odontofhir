import { useForm } from "react-hook-form"
import { Header } from "../components/basics/Header"

export const RegisterPractitioner = () => {

  const { register, handleSubmit } = useForm()

  const onSubmit = () => {

  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="flex flex-col">Nombre
          <input type="text" placeholder="Tu nombre" className="border-2 p-2 border-gray-500" {...register('name')} />
        </label>

        <label className="flex flex-col">Apellido
          <input type="text" placeholder="Tu apellido" className="border-2 p-2 border-gray-500" {...register('apellido')} />
        </label>

        <label className="flex flex-col">Cédula de identidad
          <input type="number" placeholder="Ej. 1234567" className="border-2 p-2 border-gray-500" {...register('identification')} />
        </label>

        <label className="flex flex-col">Teléfono
          <input type="text" placeholder="Ej. 0971234567" className="border-2 p-2 border-gray-500" {...register('phone')} />
        </label>

      </form>
    </div>
  )
}