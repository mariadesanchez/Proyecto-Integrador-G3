/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'
// eslint-disable-next-line no-unused-vars
// import { usecontextGlobal } from './utils/GlobalContext'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import styled from 'styled-components';
const FixedHeader = styled.div`
  position:fixed;
  z-index:100;
`;
const Header = () => {
  // const navigate = useNavigate()

 // eslint-disable-next-line no-unused-vars
//  const {dentistDispatch, dentistState} = usecontextGlobal()
 


  return (

      
    <FixedHeader>
<div className='links'>
<div className='logo'>
<Link to={routes.home}><img src=" /images/logo.png" alt='Deportes' style={{ width: '100px', height: '100px' }} /></Link>
      {/* <h4 onClick={() => navigate(-1)}>↩Back</h4> */}
    
      <Link to={routes.home} style={{textDecorationLine:'none'}}> <h2>Lo mejor en Indumentaria</h2></Link>
      </div>
    <div className='register-login'>
        <button >Crear Cuenta</button>
        <button >Iniciar Sesion</button>
      </div>
      </div>
   
    
      </FixedHeader>
      

      
     

  )
}

export default Header

