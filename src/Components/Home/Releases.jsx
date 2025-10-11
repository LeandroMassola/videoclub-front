import { useEffect, useState } from "react"
import CardReleases from "./CardReleases"


const Releases = ({latestMovies, setLatestMovies})=> {

    
    
    return(
        <div>
            <CardReleases latestMovies={latestMovies}/>
        </div>
        
    )
}

export default Releases