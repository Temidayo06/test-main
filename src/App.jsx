import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './Home'
function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
