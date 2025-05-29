import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getPractitionerByCIAction } from "../api/practitioner/get-practitioner";
import OdontoFhirLogo from '../assets/logo.svg'
import { usePractitionerStore } from "../storage/practitionerStore";
import { useForm } from "react-hook-form";

export const LoginPractitioner = () => {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  // Usamos el store de Zustand para manejar el estado del profesional
  const { practitioner, setPractitioner } = usePractitionerStore()

  const onSubmit = async (data) => {
    await obtenerDatosPractitioner(data.practitionerId);
  }

  const obtenerDatosPractitioner = async (practitionerIdentification) => {
    setLoading(true);
    const practitionerData = await getPractitionerByCIAction(practitionerIdentification);
    if (practitionerData && practitionerData.entry && practitionerData.entry.length > 0) {
      setPractitioner({
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: practitionerData.entry[0].resource,
      });
      toast.success("¡Bienvenido, profesional! Que sea un buen día. 🌤️");
      setLoading(false);
      navigate('/');
    } else {
      setPractitioner({
        isLoading: false,
        isError: true,
        isSuccess: false,
        data: null,
      });
      setLoading(false);
      toast.error("No se encontró el profesional. Por favor, verifique su Registro Profesional o CI.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="flex flex-col mb-4 items-center justify-center">
        <img src={OdontoFhirLogo} alt="Logo" className="w-64 h-auto" />
      </header>
      <main className="flex flex-col gap-4 items-center justify-center bg-white p-6 rounded-md shadow-lg">
        <h1 className="font-semibold text-2xl text-[#4a4a4a]">Bienvenido, profesional</h1>
        <form className="flex flex-col gap-4 min-w-md max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
          <label className="font-medium text-[#4a4a4a]">
            Registro Profesional o CI
            <input
              type="text"
              name="practitionerId"
              placeholder="Ingrese su Registro Profesional o CI"
              className="border border-gray-300 rounded p-2 w-full"
              {...register("practitionerId", { required: true })}
            />
          </label>
          <button
            type="submit"
            className="flex justify-center gap-2 end-0 px-4 py-2 rounded-md border-2 border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>
        <a href="/register" className="text-[#4A4A4A] hover:text-[#86cff0] transition-colors duration-200">
          ¿No tienes cuenta? Regístrate aquí
        </a>
      </main>
    </div>
  );
};
