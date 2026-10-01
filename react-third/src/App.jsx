import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Page1 from '/pages/page1.jsx'
import Page2 from '/pages/page2.jsx'
import Page3 from '/pages/page3.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  )
}
