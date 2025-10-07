import { useEffect, useState } from "react"
import { getLatest } from "../../../api/apiCalls"


const Releases = ()=> {

    const [latestMovies, setLatestMovies] = useState([])
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
        console.log(latestMovies)
    }, [latestMovies])
    
    return(
        <div className="mt-30">
            <h4 className="text-[var(--sand)]">New Releases</h4>
            <div>
                {latestMovies.map(movie=> (
                    <div key={movie.id}>
                        {movie.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Releases