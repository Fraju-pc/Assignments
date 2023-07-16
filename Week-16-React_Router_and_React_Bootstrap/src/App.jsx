import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>

        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />}/> 
          <Route path='/Login' element={<Login/>} /> 
          <Route path='/Admin' element={<Admin />} />
        </Routes>
      
      </Router>

     
    </>
  )
}

export default App
