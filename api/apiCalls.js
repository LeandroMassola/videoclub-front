

export async function getLatest() {
    const latestMovies = await fetch("http://localhost:8000/api/movies/");
    
    return await latestMovies.json()
}