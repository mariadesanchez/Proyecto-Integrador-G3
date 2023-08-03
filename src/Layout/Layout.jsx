// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Header/Header'
import Footer from '../Components/Footer'

const Layout = () => {
return (
    
    <div >
        <Navbar/>
        <Outlet/>
        <Footer/>
  
    </div>
  )
}

export default Layout