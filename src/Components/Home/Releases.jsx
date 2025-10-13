import { useEffect, useState } from "react"
import CardReleases from "./CardReleases"


const Releases = ({latestMovies, setLatestMovies})=> {

    
    
    return(
        <div className="p-5">
            <CardReleases latestMovies={latestMovies}/>
        </div>
        
    )
}

export default Releases