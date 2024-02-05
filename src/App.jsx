import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/homepage/Navigation'
import Homepage from './pages/Homepage'


function App() {


  return (
    <>
    <div className="daraz_homepage">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
