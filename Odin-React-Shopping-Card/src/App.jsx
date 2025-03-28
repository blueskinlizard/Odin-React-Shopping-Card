import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsList from './ProductsList'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function App() {
  return(
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
  
}

export default App
