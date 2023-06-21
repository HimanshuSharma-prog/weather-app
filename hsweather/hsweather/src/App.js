import react from 'react'
import Home from './components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Forecast from './components/Forecast'
const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Forecast' element={<Forecast />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App