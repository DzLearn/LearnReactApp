import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from '../pages/home/Home'
import About from '../pages/about/About'

export default function NavRoutes() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
      </Routes>
  )
}
