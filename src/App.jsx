import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { PatientPage } from "./pages/PatientPage"
import { PatientProfile } from "./pages/PatientProfile"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "react-hot-toast"
import { PatientFormCreate } from "./pages/PatientFormCreate"
import { RegistroAlergia } from "./pages/RegistroAlergia"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { EncuentroDetail } from "./pages/EncuentroDetail"
import { LoginPractitioner } from "./pages/LoginPractitioner"
import FichaClinicaForm from './pages/FichaClinicaForm'
import './App.css'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPractitioner />} />
          <Route path="/patients" element={<PatientPage />} />
          <Route path="/patient-form" element={<PatientFormCreate />} />
          <Route path="/patient/:id" element={<PatientProfile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/test" element={<LoginPractitioner />} />
          <Route path="/login" element={<LoginPractitioner />} />
          <Route path="/patient/:id/allergies" element={<RegistroAlergia />} />
          <Route path="/patient/:id/consulta/:idconsulta" element={<EncuentroDetail />} />
          <Route path="/patient/:id/ficha-nueva" element={<FichaClinicaForm />} />          
          <Route path="*" element={<Navigate to='/404' />} />
        </Routes>
        <Toaster />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
