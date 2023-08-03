// /* eslint-disable no-undef */
// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import { Link } from 'react-router-dom'
// // import { useNavigate } from 'react-router-dom'
// import { routes } from '../utils/routes'
// // eslint-disable-next-line no-unused-vars
// import { usecontextGlobal } from './utils/GlobalContext'
// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Navbar = () => {
//   // const navigate = useNavigate()

//   // eslint-disable-next-line no-unused-vars
//   const { dentistDispatch, dentistState } = usecontextGlobal()

//   return (
//     <div className='links'>
//       <div className='logo'>
//         <Link to={routes.home}><img src=" /images/deportes.png" alt='Deportes' style={{ width: '100px', height: '100px' }} /></Link>
//         {/* <h4 onClick={() => navigate(-1)}>↩Back</h4> */}
//         <Link to={routes.home} style={{ textDecorationLine: 'none' }}> <h2>Lo mejor en Indumentaria</h2></Link>
//       </div>
//       <div>
//         <button style={{ marginRight: '10px', borderRadius: '5px', height: '60px', width: '150px' }}>Crear Cuenta</button>
//         <button style={{ marginRight: '10px', borderRadius: '5px', height: '60px', width: '150px' }}>Iniciar Sesion</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
// import { usecontextGlobal } from '../utils/GlobalContext';
import '../Header/Header.css'; 

const Header = () => {
  // const { dentistDispatch, dentistState } = usecontextGlobal();

  return (
    <div className='header-container'>
      <div className='header'>
        <div className='logo'>
          <Link to={routes.home}>
            <img src="/images/deportes.png" alt='Deportes' />
          </Link>
          <Link to={routes.home} style={{ textDecorationLine: 'none' }}>
            <h2>Lo mejor en Indumentaria</h2>
          </Link>
        </div>
        <div className='buttons'>
          <button>Crear Cuenta</button>
          <button>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
