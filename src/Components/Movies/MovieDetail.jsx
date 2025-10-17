import { act, useEffect, useState, Suspense } from "react";
import { getMovieDetail} from "../../../api/apiCalls";
import { useParams} from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import { SiMetacritic } from "react-icons/si";
import { SiRottentomatoes } from "react-icons/si";

const MovieDetail = () => {


    const {id} = useParams();

    const [moviePicked, setMoviePicked] = useState(null)
    const [movieTrailer , setMovieTrailer] = useState(null)
    const [movieCredits , setMovieCredits] = useState([])
    const [movieDirector, setMovieDirector] = useState({
        name:"",
        profileImg:"",
        known_for_department:"",
    })


    useEffect(()=> {
        const fetchMovie = async () => {
            try {
                const data = await getMovieDetail(id)
                setMoviePicked(data)
                setMovieTrailer(`https://www.youtube.com/embed/${data.trailer}`)
                setMovieCredits(data.credits)

                const director = data.credits.find((director) => director.known_for_department == "Directing")
                setMovieDirector({
                    name: director.name,
                    profileImg: director.profile_path,
                    known_for_department: director.known_for_department,
                })
            } catch (error) {
                console.log("error : " + error)
            }
        }

        
        fetchMovie()
        
    }, [id])
    
    
    if (!moviePicked) {
        return <p className="text-white text-center mt-10">Cargando película...</p>;
    }

    return(
        <div className="mt-10">
            <h1 className=" mb-2  text-left pl-5 text-xl text-[var(--sand)]">{moviePicked.title}</h1>
            <div className="flex flex-col justify-center items-center gap-5">
                <img className="px-5 rounded-4xl" src={`https://image.tmdb.org/t/p/w500${moviePicked.poster_path}`} alt="" />
                <div className="flex gap-5">
                    <FaImdb size={30} color="yellow"/>
                    <SiMetacritic size={30} color="var(--sand)"/>
                    <SiRottentomatoes size={30} color="red"/>
                </div>
                <div className="flex flex-col gap-5 text-[var(--sand)] p-5 justify-center items-center">
                    <h3 className="underline">Overview:</h3>
                    <p className="text-center">{moviePicked.overview}</p>
                </div>
            </div>

            <div className="flex overflow-y-hidden scrollbar-hide  gap-3 items-center p-5 pl-10 mt-10">
                {movieCredits.map((actor)=> (
                    <div key={actor.id} className="flex flex-col gap-2 w-28 justify-center items-center">
                        <Suspense fallback={<div>Cargando poster</div>}>
                            <img loading="lazy" className="rounded-full  object-cover aspect-square max-w-10" src={actor.profile_path ? `https://image.tmdb.org/t/p/w45/${actor.profile_path}` : "/default-profile.png"} alt="profile-pic" />
                        </Suspense>
                        
                        <p className="text-center text-[var(--sand)] line-clamp-2 overflow-hidden text-ellipsis">{actor.name}</p>
                        <p className="text-gray-400/75 text-sm font-bold tracking-wide">{actor.known_for_department}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center p-5 pl-10 gap-3 w-28">
                <img className="rounded-full  object-cover aspect-square max-w-10" src={movieDirector.profile_path ? `https://image.tmdb.org/t/p/w45/${movieDirector.profile_path}` : "/default-profile.png"} alt="director-image" />

                <p className="text-center text-[var(--sand)] line-clamp-2 overflow-hidden text-ellipsis">{movieDirector.name}</p>
                <p className="text-gray-400/75 text-sm font-bold tracking-wide">{movieDirector.known_for_department}</p>
            </div>

            <div className="flex justify-center pt-5">
                {movieTrailer && <iframe src={movieTrailer} frameBorder="0" allowFullScreen  className="w-full rounded-[2rem] p-5 aspect-video h-75"/>}
            </div>

            
            
        </div>
    )
}

export default MovieDetail