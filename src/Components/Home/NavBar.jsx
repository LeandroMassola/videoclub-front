import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { getUserFromToken, getUserById } from "../../../db/users";
import { FiLogIn } from "react-icons/fi";
import { GiFilmSpool } from "react-icons/gi";
import { BsCollectionFill } from "react-icons/bs";
import { TbNews } from "react-icons/tb";



const NavBar = ({userIsLogged})=> {
    const [loggedUser, setLoggedUser] = useState()
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    useEffect(()=> {
        if (localStorage.getItem("token")) {
            try {
                const userId = getUserFromToken();
                console.log(userId);
                
                getUserById(userId).then((data) => setLoggedUser(data));
                
                
            } catch (error) {
                console.log("error en el catrch del front: " + error);
            }
        }
    },[])

    const handleClickMenu = ()=> {
        setIsMenuClicked(prev => !prev)
    }



    return (
        <nav className=" flex pt-2 pr-2 z-50 bg-transparent justify-end font-['courier'] ">
            <div className="flex gap-2">
                {userIsLogged && <img src="/default-profile.png" className="ml-2 rounded-full w-7.5 h-7.5" alt="" />}
                
                {loggedUser && <p className="font-bold text-[var(--sand)]">{loggedUser.name}</p>}
            </div>
            <div className="flex justify-end gap-2">
                <IoSearchOutline className="text-[var(--sand)]" size={25}/>
                <IoMenuOutline onClick={handleClickMenu} className="text-[var(--sand)]" size={25}/>
            </div>

            {isMenuClicked && 
                <div className="absolute w-full top-10 inset-0 text-[var(--sand)]">
                    <ul className="bg-black p-5 flex gap-2 flex-col font-bold">
                        <div className="flex gap-2">
                            <FiLogIn size={15} className="text-[var(--sand)] self-center"/>
                            <li>Log In</li>
                        </div>

                        <div className="flex gap-2">
                            <GiFilmSpool size={15} className="text-[var(--sand)] self-center"/>
                            <li>Films</li>
                        </div>

                        <div className="flex gap-2">
                            <BsCollectionFill size={15} className="text-[var(--sand)] self-center"/>
                            <li>Lists</li>
                        </div>

                        <div className="flex gap-2">
                            <TbNews size={15} className="text-[var(--sand)] self-center"/>
                            <li>News</li>
                        </div>
                    </ul>
                </div>
            }

            
        </nav>


    )
}

export default NavBar;