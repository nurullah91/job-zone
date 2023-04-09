import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <div>
     <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
       
    </div>
  )
}

export default App
