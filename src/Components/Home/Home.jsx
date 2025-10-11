import NavBar from "./NavBar"
import Hero from "./Hero"
import Releases from "./Releases"
import Welcome from "./Welcome"
import {useState, useEffect} from "react"
import { getLatest } from "../../../api/apiCalls"


const Home = () => {

    const [latestMovies, setLatestMovies] = useState([])
    const [changeBg, setChangeBg] = useState(``)
    useEffect(()=> {

        const fetchMovies = async ()=> {
            try {
                const movies = await getLatest()
                console.log(movies)
                setLatestMovies(movies)
                

                console.log(latestMovies)
            } 
            catch (error) {
                console.log("entro al catch" + error)
            }
        }
        fetchMovies()
        
    }, [])

    
    useEffect(()=> {
        if (latestMovies.length > 0) {
            const randomBg = Math.floor(Math.random()*19 + 1)
            console.log(latestMovies[randomBg].poster_path)
        setChangeBg(`https://image.tmdb.org/t/p/original${latestMovies[randomBg].backdrop_path}`)
    }
        
    }, [latestMovies])

    
    return(

        <div className=" relative bg-linear-to-b from-black from-0.5% to-[#512f6a]  flex flex-col font-[Courier] ">
            <img 
                src={changeBg} alt="welcome-image" className="bgWelcome absolute z-0 top-0 object-cover  min-h-100"
            />
            <NavBar/>
            <Welcome/>
            <Hero/>
            <Releases latestMovies={latestMovies}/>
        </div>

    )
}

export default Home