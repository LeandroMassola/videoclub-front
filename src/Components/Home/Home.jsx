import NavBar from "./NavBar"
import Hero from "./Hero"
import Releases from "./Releases"

const Home = () => {
    return(

        <div className="bg-[var(--darkViolet)] flex flex-col">
            <NavBar/>
            <Hero/>
            <Releases/>
        </div>

    )
}

export default Home