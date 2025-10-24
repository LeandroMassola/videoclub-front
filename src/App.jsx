import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import MovieDetail from './Components/Movies/MovieDetail'
import NavBar from './Components/Home/NavBar'
import Register from './Components/Users/Register'
import Login from './Components/Users/Login'
import { useState } from 'react'

function App() {
  const [userIsLogged, setUserIsLogged] = useState(false)

  

  return (
    <div className='flex flex-col bg-[image:var(--linearBg)]'>
      <NavBar userIsLogged={userIsLogged}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<MovieDetail/>}/>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login setUserIsLogged={setUserIsLogged}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
