import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import Navbar from "../components/Navbar"
import Main from '../pages/Main'

const AppRouter = () => {
  return (
<AuthProvider>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route index element={<Main/>}/>
  </Routes>
  </BrowserRouter>
</AuthProvider>
  )
}

export default AppRouter