import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homes from './components/Homes'
import Addpro from './components/Addpro'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/homes' element={<Homes />}></Route>
      <Route path='/added' element={<Addpro />}></Route>
    </Routes>
     
    </>
  )
}

export default App
