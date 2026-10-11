import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import SeleccionSucursal from './pages/SeleccionSucursal.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Pantalla de selección inicial */}
        <Route path="/" element={<SeleccionSucursal />} />
        
        {/* Rutas por sucursal */}
        <Route path="/floripa" element={<App sucursalId="floripa" />} />
        <Route path="/galinhas" element={<App sucursalId="galinhas" />} />
        
        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)