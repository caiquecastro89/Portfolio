import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CasePage from './pages/CasePage'
import './fonts.css'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ion" element={<CasePage slug="ion" />} />
      <Route path="/ids" element={<CasePage slug="ids" />} />
      <Route path="/rite" element={<CasePage slug="rite" />} />
    </Routes>
  </BrowserRouter>
)
