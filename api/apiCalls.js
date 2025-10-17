

/* export async function getLatest() {
    const latestMovies = await fetch("http://localhost:8000/api/movies/");    
    return await latestMovies.json()
} */



export async function getMovieReleasesFront() {

    
    const url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const options = {
        method: "GET",
        headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
    };

    try {
        console.log("🌐 Llamando a TMDB...");
        const response = await fetch(url, options);
        
        // Si TMDB responde con error
        if (!response.ok) {
            throw new Error(`TMDB responded with status ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);

        // Guardamos cache
        
        return data.results
    } catch (error) {
        console.error("❌ Error al obtener películas:", error.message);

    }
}

export async function getMovieDetail(id) {
    const moviePicked = await fetch(`http://localhost:8000/api/movies/${id}`)
    console.log(moviePicked);
    
    return await moviePicked.json()
}

export async function getMovieTrailer(id) {
    const moviePicked = await fetch(`http://localhost:8000/api/movies/${id}/trailer`)
    console.log(moviePicked);
    
    return await moviePicked.json()
}

