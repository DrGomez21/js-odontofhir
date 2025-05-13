import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { PatientPage } from "./pages/PatientPage"
import { PatientProfile } from "./pages/PatientProfile"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "react-hot-toast"
import { PatientFormCreate } from "./pages/PatientFormCreate"
import { PatientNotes } from "./pages/PatientNotes"
import { notes } from "./utils/procedimientosDentales"
import { Test } from "./pages/test/Test"
import { RegistroAlergia } from "./pages/RegistroAlergia"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import { EncuentroDetail } from "./pages/EncuentroDetail"

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<PatientPage />} />
          <Route path="/patient-form" element={<PatientFormCreate />} />
          <Route path="/patient/:id" element={<PatientProfile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/patient-notes" element={<PatientNotes notes={notes} />} />
          <Route path="/test-api" element={<Test />} />
          <Route path="/patient/:id/allergies" element={<RegistroAlergia />} />
          <Route path="/patient/:id/consulta/:idconsulta" element={<EncuentroDetail />} />
          <Route path="*" element={<Navigate to='/404' />} />
        </Routes>
        <Toaster />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
