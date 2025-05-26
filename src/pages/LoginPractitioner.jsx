import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getPractitionerByCIAction } from "../api/practitioner/get-practitioner";
import OdontoFhirLogo from '../assets/logo.svg'

export const LoginPractitioner = () => {
  const [practitionerId, setPractitionerId] = useState("");
  const [submittedId, setSubmittedId] = useState(null);
  const navigate = useNavigate()

  const [practitioner, setPractitioner] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: null,
  });

  useEffect(() => {
    if (!submittedId) return;

    setPractitioner({
      isLoading: true,
      isError: false,
      isSuccess: false,
      data: null,
    });

    getPractitionerByCIAction(submittedId)
      .then((data) => {
        setPractitioner({
          isLoading: false,
          isError: false,
          isSuccess: true,
          data,
        });
      })
      .catch(() => {
        setPractitioner({
          isLoading: false,
          isError: true,
          isSuccess: false,
          data: null,
        });
      });
  }, [submittedId]);

  useEffect(() => {
    if (practitioner.isError) {
      toast.error("Error al iniciar sesión. Por favor, intente nuevamente.");
    }

    if (practitioner.isSuccess && practitioner.data && practitioner.data.total > 0) {
      console.log("Datos del profesional:", practitioner.data);
      toast.success("¡Bienvenido, profesional! Que sea un buen día. 🌤️");
      navigate('/');
    } else if (practitioner.data && practitioner.data.total === 0) {
      console.log("No se encontró el profesional o no hay datos disponibles.");
      toast.error("No se encontró el profesional. Por favor, verifique su Registro Profesional o CI.");
    }
  }, [practitioner.isError, practitioner.isSuccess, practitioner.data, navigate]);

  const handleInputChange = (e) => {
    setPractitionerId(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!practitionerId) {
      toast.error("Por favor, ingrese su Registro Profesional o CI.");
      return;
    }
    setSubmittedId(practitionerId);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="flex flex-col mb-4 items-center justify-center">
        <img src={OdontoFhirLogo} alt="Logo" className="w-64 h-auto" />
      </header>
      <main className="flex flex-col gap-4 items-center justify-center bg-white p-6 rounded-md shadow-lg">
        <h1 className="font-semibold text-2xl text-[#4a4a4a]">Bienvenido, profesional</h1>
        <form className="flex flex-col gap-4 min-w-md max-w-2xl" onSubmit={handleLogin}>
          <label className="font-medium text-[#4a4a4a]">
            Registro Profesional o CI
            <input
              type="text"
              name="practitionerId"
              placeholder="Ingrese su Registro Profesional o CI"
              className="border border-gray-300 rounded p-2 w-full"
              value={practitionerId}
              onChange={handleInputChange}
            />
          </label>
          <button
            type="submit"
            className="flex justify-center gap-2 end-0 px-4 py-2 rounded-md border-2 border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all"
            disabled={practitioner.isLoading}
          >
            {practitioner.isLoading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>
        <a href="/register" className="text-[#4A4A4A] hover:text-[#86cff0] transition-colors duration-200">
          ¿No tienes cuenta? Regístrate aquí
        </a>
      </main>
    </div>
  );
};
