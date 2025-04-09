import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { PatientPage } from "./pages/PatientPage"
import { PatientProfile } from "./pages/PatientProfile"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "react-hot-toast"
import { PatientFormCreate } from "./pages/PatientFormCreate"
import './App.css'
import { PatientNotes } from "./pages/PatientNotes"
import { notes } from "./utils/procedimientosDentales"

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<PatientPage />} />
          <Route path="/patient-form" element={<PatientFormCreate />} />
          <Route path="/patient-profile/:id" element={<PatientProfile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/patient-notes" element={<PatientNotes notes={notes} />} />
          <Route path="*" element={<Navigate to='/404' />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App
