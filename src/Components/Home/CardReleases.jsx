import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                                <LazyLoadImage  className="rounded-md" loading="lazy"  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="" />
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