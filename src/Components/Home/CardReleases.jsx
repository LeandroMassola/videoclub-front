import { Link } from "react-router-dom"

const CardReleases = ({latestMovies})=> {
    return(
        <div>

            <div className="mt-30">
                <h4 className="text-[var(--sand)] pl-5 text-xl underline font-extrabold">New Releases</h4>
                <div className="mt-10 grid grid-cols-3 gap-10 p-5">
                    {latestMovies.map(movie=> (

                        <div className="flex flex-col" key={movie.id}>
                            <div>
                            <Link to={`/${movie.id}`}>
                                <img className="rounded-md"  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                            </Link>   
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-[var(--sand)] text-center mt-5 font-bold">{movie.title}</h4>
                            </div> 
                            
                        </div>
                        
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default CardReleases