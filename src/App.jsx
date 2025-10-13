import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import MovieDetail from './Components/Movies/MovieDetail'
import NavBar from './Components/Home/NavBar'

function App() {

  return (
    <div className='flex flex-col bg-[image:var(--linearBg)]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<MovieDetail/>}/>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}

export default App
