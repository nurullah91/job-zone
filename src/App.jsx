import { createContext, useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'


export const jobContext = createContext();

function App() {
  
  const jobData = useLoaderData();
  return (
    <div>
      <jobContext.Provider value={jobData}>

     <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

      </jobContext.Provider>
       
    </div>
  )
}

export default App
