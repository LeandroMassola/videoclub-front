import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";


const NavBar = ()=> {
    return (
        <nav className=" flex pt-5 z-50 bg-transparent">
            <div className="w-[33%] flex">
                <p>LOGO</p>
            </div>
            <div className="w-[33%] flex">
                <IoSearchOutline className="self-center w-full text-[var(--sand)]" size={25}/>
            </div>
            <div className="w-[33%] flex">
                <IoMenuOutline className="w-full ml-20 text-[var(--sand)]" size={25}/>
            </div>
            
        </nav>
    )
}

export default NavBar;