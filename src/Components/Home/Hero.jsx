
import { Link } from "react-router-dom"
const Hero = ()=> {
    return(
        <div className="mt-50 text-[var(--sand)] flex flex-col items-center justify-center z-50" >
            <div>
                <Link to={"/register"}>
                    <button className="font-extrabold bg-[var(--darkBlue)] px-3 py-3 rounded-md">Create an account</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero