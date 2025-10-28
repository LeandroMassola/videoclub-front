import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import MovieDetail from './Components/Movies/MovieDetail'
import NavBar from './Components/Home/NavBar'
import Register from './Components/Users/Register'
import Login from './Components/Users/Login'
import Profile from './Components/Users/Profile'
import { useEffect, useState } from 'react'
import { getUserFromToken, getUserById } from "../db/users";


function App() {
  const [userIsLogged, setUserIsLogged] = useState(false)
  const [loggedUser, setLoggedUser] = useState()
  
  useEffect(()=> {
    if (localStorage.getItem("token")) {

      setUserIsLogged(true)
      try {
          const userId = getUserFromToken();
          console.log(userId);
          
          getUserById(userId).then((data) => setLoggedUser(data));
          
          
      } catch (error) {
          console.log("error en el catrch del front: " + error);
      }
    }
  },[])

  

  return (
    <div className='flex flex-col '>
      <NavBar userIsLogged={userIsLogged} loggedUser={loggedUser}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<MovieDetail/>}/>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login setUserIsLogged={setUserIsLogged} userIsLogged={userIsLogged} loggedUser={loggedUser}/>}/>
        <Route path='/profile' element={<Profile loggedUser={loggedUser} />}/>
      </Routes>
    </div>
  )
}

export default App
