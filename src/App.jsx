
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
