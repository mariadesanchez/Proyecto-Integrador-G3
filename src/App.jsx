
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import PageNotFound from './Routes/PageNotFound'
import { routes } from './utils/routes'
import Detail from './Routes/Detail'
import Layout from './Layout/Layout'
import { usecontextGlobal } from './Components/utils/GlobalContext'
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  // const dentistState = {dentistTheme:true}
  // eslint-disable-next-line no-unused-vars
  const {dentistState} = usecontextGlobal()
 
  return (
      <div className="App">

         
           <Routes>
      
      
           <Route path='/' element={<Layout/>}>
           <Route path={routes.home} element={<Home/>}/>
           <Route path={routes.detail} element={<Detail/>}/>
           <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
         </Route>
       
          </Routes>
      
      </div>
  );
}

export default App;
