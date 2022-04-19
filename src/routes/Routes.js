import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Motion from '../pages/Motion'
import ReadMore from '../pages/ReadMore';

export default function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/motion" element={<Motion />} />
      <Route path="/card/:id" element={<ReadMore />} />
    </Routes>
  )
}
