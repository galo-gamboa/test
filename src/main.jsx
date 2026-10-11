import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import SeleccionSucursal from './pages/SeleccionSucursal.jsx'
import './index.css'

// 1. Importar el componente
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeleccionSucursal />} />
        <Route path="/floripa" element={<App sucursalId="floripa" />} />
        <Route path="/galinhas" element={<App sucursalId="galinhas" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    {/* 2. Agregar el componente al final */}
    <Analytics />
  </React.StrictMode>,
)