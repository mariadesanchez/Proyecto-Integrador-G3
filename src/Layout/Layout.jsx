// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Search from '../Components/Search'



const Layout = () => {
 


  return (
    
    <div >  
      
       
      <Search/>
      <Header/>
        <Outlet/>
        <Footer/>
  
    </div>
  )
}

export default Layout