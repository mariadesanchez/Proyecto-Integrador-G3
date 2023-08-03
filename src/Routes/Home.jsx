// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '../Components/Card'
import { usecontextGlobal } from '../Components/utils/GlobalContext.jsx'




const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const {dentistState} = usecontextGlobal()
  return (
    <main className="" >
     
      <div className='card-grid'>
  
    
      <p style={{fontSize:'3em',textAlign:'center',marginTop:'200px'}}>Buscar Por Marcas</p>
      <div className='marcas' >
       
        {dentistState.dentistsList.map(dentist => (<Card  dentist={dentist} key ={dentist.id}/>))}
        </div>
      </div>
      <p style={{fontSize:'3em',textAlign:'center'}}>Recomendaciones</p>
      <div className='recomendaciones' style={{marginLeft:'200px'}}>
        {/* {dentistState.dentistsList.map(dentist => (<Card dentist={dentist} key ={dentist.id}/>))} */}
        
        {dentistState.dentistsList.filter(dentist =>  dentist.id==1||dentist.id==2||dentist.id==3||dentist.id==4||dentist.id==5)
  .
 
map(dentist => (
    <Card  dentist={dentist} key={dentist.id} />
  ))
}
  
        
        
        
        
        </div>
    </main>
  )
}

export default Home
