// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Search = () => {
   

    return (   

 <div className='search' >

      <div className='text-input'>
       <h2 style={{color:'white',fontSize:'48px',fontFamily:'Kumbh Sans'}}>Busca Las Mejores Ofertas en Indumentaria Deportiva</h2>

       <input type="text"placeholder='Buscar Por Marca' />
       <input type="text" placeholder='Buscar Por Producto'/> 
       <input type="text" placeholder='Buscar Por Equipo Favorito'/> 

     </div>
     <div className='boton'>
      <button style={{marginLeft:'0px'}}>Buscar</button>
     </div>
    </div> 

    
  )
}
export default Search