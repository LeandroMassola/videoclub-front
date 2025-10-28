import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { GiFilmSpool } from "react-icons/gi";
import { BsCollectionFill } from "react-icons/bs";
import { TbNews } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import {Link} from "react-router-dom"
import { AnimatePresence, motion } from "motion/react";
import { HiHome } from "react-icons/hi";


const NavBar = ({userIsLogged, loggedUser})=> {
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    useEffect(()=> {
        if(isMenuClicked) {
            setIsMenuClicked(false)
        }
    },[])

    
    const handleClickMenu = ()=> {
        setIsMenuClicked(prev => !prev)
    }



    return (
        <nav className=" flex p-2 pt-4 z-50 bg-transparent justify-between font-['courier'] ">
            <div className="flex gap-4">
                {
                userIsLogged && 
                <Link to={"/profile"}>
                    <img src="/default-profile.png" className="ml-2 rounded-full w-7.5 h-7.5" alt="image-profile" />
                </Link>
                }
                
                {loggedUser && <p className="font-bold text-[var(--sand)]">{loggedUser.name}</p>}
            </div>
    
            <div className="flex justify-end gap-2">
                <Link to={"/"}>
                    <HiHome size={25} className="text-[var(--sand)]"/>
                </Link>
                <IoSearchOutline className="text-[var(--sand)]" size={25}/>
                <IoMenuOutline onClick={handleClickMenu} className={`text-[var(--sand)] ${isMenuClicked == true && "opacity-0"}`} size={25}/>
                <MdClose onClick={handleClickMenu}  className={`text-[var(--sand)] absolute right-2 ${isMenuClicked == false && "hidden"}`} size={25}/>
            </div>
            <AnimatePresence>
                {isMenuClicked && 
                    

                    
                    <motion.div
                        key="menu" initial={{visibility:"hidden", y:-95, transition: { type: "spring", stiffness: 100, damping: 15 }, opacity:0}} animate={{visibility:"visible", y:5, opacity:1, transition: { type: "spring", stiffness: 80, damping: 12 }}} exit={{transition:{duration:0.25}, opacity:0, visibility:"hidden", y:-20}} className="absolute w-full z-50  top-10 rounded-lg inset-0 text-[var(--sand)]"
                    >

                        <motion.div
                            className="absolute inset-0 h-screen bg-black/0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 0, visibility:"hidden" }}
                            transition={{ duration: 0.25 }}
                            /* style={{ pointerEvents: isMenuClicked ? "auto" : "none" }} */
                            onClick={() => setIsMenuClicked(false)}
                        />

                        <ul className="relative bg-black p-5 h-[35%] flex gap-5 flex-col pt-10 font-bold">
                            <div className="flex gap-2  border-b-2 pb-2 border-b-[var(--sand)]">
                                <FiLogIn size={15} className="text-[var(--sand)] self-center"/>
                                <Link onClick={()=> setIsMenuClicked(false)} to={"/login"}><li>Log In</li></Link>
                            </div>

                            <div className="flex gap-2 border-b-2 pb-2 border-b-[var(--sand)]">
                                <GiFilmSpool size={15} className="text-[var(--sand)] self-center"/>
                                <li>Films</li>
                            </div>

                            <div className="flex gap-2 border-b-2 pb-2 border-b-[var(--sand)]">
                                <BsCollectionFill size={15} className="text-[var(--sand)] self-center"/>
                                <li>Lists</li>
                            </div>

                            <div className="flex gap-2 border-b-2 pb-2 border-b-[var(--sand)]">
                                <TbNews size={15} className="text-[var(--sand)] self-center"/>
                                <li>News</li>
                            </div>
                        </ul>
                    </motion.div>
                    
                    
                }   
            </AnimatePresence>
        </nav>


    )
}

export default NavBar;