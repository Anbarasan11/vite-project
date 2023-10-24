import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='' element={<SignUp/>}/>
      
      <Route path='login' element={<LogIn/>}/>

      <Route path='home' element={<Home/>}/>
    
      </Routes>
      </>
  )
}

export default App
