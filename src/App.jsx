import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}

export default App
