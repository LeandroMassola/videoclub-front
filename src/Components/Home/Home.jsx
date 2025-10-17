import NavBar from "./NavBar"
import Hero from "./Hero"
import Releases from "./Releases"
import Welcome from "./Welcome"
import {useState, useEffect, Suspense} from "react"
import { getMovieReleasesFront} from "../../../api/apiCalls"


const Home = () => {

    const [latestMovies, setLatestMovies] = useState([])
    const [changeBg, setChangeBg] = useState(``)
    const [bgLoaded, setBgLoaded] = useState(false);


    /* useEffect(()=> {

    const fetchMovies = async ()=> {
        try {
            const movies = await getLatest()
            setLatestMovies(movies)

            const randomBg = Math.floor(Math.random()*20 + 1)
            setChangeBg(`https://image.tmdb.org/t/p/w500${movies[randomBg].backdrop_path}`)
        } 
        catch (error) {
            console.log("entro al catch" + error)
        }
    }
    fetchMovies()
        
    }, []) */

    useEffect(()=> {
        const fetchMovies = async () => {
            try {
                const movies = await getMovieReleasesFront()
                setLatestMovies(movies)

                const randomBg = Math.floor(Math.random()*20 + 1)
                setChangeBg(`https://image.tmdb.org/t/p/w500${movies[randomBg].backdrop_path}`)
            } catch (error) {
                console.log("error: " + error);
                
            }
        }
        fetchMovies()
    },[])
    
    useEffect(() => {
        const img = new Image();
        img.src = changeBg;
        img.onload = () => setBgLoaded(true);
    }, [changeBg]);
    
    return(

        <div className=" overflow-y-hidden relative bg-linear-to-b from-black from-0.5% to-[#512f6a]  flex flex-col font-[Courier]">
            <Suspense fallback={<div>Cargando fondo</div>}>
                <img 
                src={changeBg} loading="lazy" alt="welcome-image" className="bgWelcome absolute z-0 top-0 object-cover   min-h-100"
                />
            </Suspense>

            <Welcome/>
            <Hero/>
                
            <Suspense fallback={<div>Cargando Releases</div>}>
                <Releases latestMovies={latestMovies}/>
            </Suspense>
            
            {/* <NavBar/> */}
            
            
        </div>

    )
}

export default Home