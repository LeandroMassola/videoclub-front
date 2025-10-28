import { useEffect } from "react"




const Profile = ({loggedUser})=> {
    
    

    
    return(
        <div className="h-screen mt-20">
            <div className="flex flex-col text-[var(--sand)] gap-10 ">
                <div className="flex flex-col gap-5 justify-around items-center font-bold">
                    <img className="size-20 rounded-sm" src="/default-profile.png" alt="user-profile" />
                    {loggedUser && <h2 className="text-2xl">{loggedUser.name} {loggedUser.surname} </h2>}
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex overflow-y-hidden scrollbar-hide gap-5  items-center mt-15 font-bold w-[75vw] ">
                        <h3>Watched</h3>
                        <h3>Watchlist</h3>
                        <h3>Favorites</h3>
                        <h3>My Reviews</h3>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Profile