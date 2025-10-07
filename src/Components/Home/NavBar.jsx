import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";


const NavBar = ()=> {
    return (
        <nav className="flex justify-between py-5">
            <div className="w-[33%] flex">
                <p>LOGO</p>
            </div>
            <div className="w-[33%] flex">
                <IoSearchOutline className="self-center w-full"/>
            </div>
            <div className="w-[33%] flex">
                <IoMenuOutline className="w-full"/>
            </div>
            
        </nav>
    )
}

export default NavBar;