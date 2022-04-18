import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About'
import ReadMore from '../pages/ReadMore';

export default function NavRoutes() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
      <Route path="/card/:id" element={<ReadMore />} />
      </Routes>
  )
}
