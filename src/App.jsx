import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard"
import Unidades from "./pages/Unidades/Unidades"
import CadastroEnergia from "./pages/CadastroEnergia/CadastroEnergia"
import ErroRota from "./pages/ErroRota/ErroRota"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/dashboard" element={<Navigate replace to="/" />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/cadastro" element={<CadastroEnergia />} />  
        <Route path="*" element={<ErroRota />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;







