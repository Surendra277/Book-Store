import { useEffect, useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-screen overflow-hidden'>
        <Outlet />
        
      </div>
      
      <Footer />
    </>
  )
}

export default App;
