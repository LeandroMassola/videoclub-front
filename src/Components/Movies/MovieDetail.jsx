import { useEffect, useState } from "react";
import { getMovieDetail, getMovieTrailer } from "../../../api/apiCalls";
import { useParams} from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import { SiMetacritic } from "react-icons/si";
import { SiRottentomatoes } from "react-icons/si";

const MovieDetail = () => {


    const {id} = useParams();

    const [moviePicked, setMoviePicked] = useState(null)
    const [movieTrailer , setMovieTrailer] = useState(null)
    useEffect(()=> {
        const fetchMovie = async () => {
            try {
                const data = await getMovieDetail(id)
                setMoviePicked(data)
            } catch (error) {
                console.log("error : " + error)
            }
        }

        
        fetchMovie()
        
    }, [id])

    useEffect(()=> {
        const fetchTrailer = async () => {
            try {
                const data = await getMovieTrailer(id)
                setMovieTrailer(`https://www.youtube.com/embed/${data.key}`)
            } catch (error) {
                console.log("error al buscar el trailers : " + error)
            }
        }
        fetchTrailer()
    }, [id])
    
    if (!moviePicked) {
        return <p className="text-white text-center mt-10">Cargando película...</p>;
    }
   
    return(
        <div className="bg-[image:var(--linearBg)] h-screen">
            <h1 className="mt-50 mb-2  text-left pl-5 text-2xl text-[var(--sand)]">{moviePicked.title}</h1>
            <div className="flex flex-col justify-center items-center gap-5">
                <img className="px-5 rounded-lg" src={`https://image.tmdb.org/t/p/original${moviePicked.poster_path}`} alt="" />
                <div className="flex gap-5">
                    <FaImdb size={30} color="yellow"/>
                    <SiMetacritic size={30} color="var(--sand)"/>
                    <SiRottentomatoes size={30} color="red"/>
                </div>
                <div className="flex flex-col gap-5 text-[var(--sand)] justify-center items-center">
                    <h3>Overview:</h3>
                    <p className="text-center">{moviePicked.overview}</p>
                </div>
            </div>

            <div>
                {movieTrailer && <iframe src={movieTrailer} frameborder="0" allowFullScreen width="full"></iframe>}
            </div>
        </div>
    )
}

export default MovieDetail