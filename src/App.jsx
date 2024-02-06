import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/homepage/Navigation'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/signup'
import EachProduct from './pages/EachProduct'


function App() {


  return (
    <>
    <div className="daraz_homepage">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/signup" element ={<Signup/>} />
          <Route path="/product1" element={<EachProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
