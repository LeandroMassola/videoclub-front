import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../../db/users";

const Login = ({setUserIsLogged})=> {

    const [dataLogin, setDataLogin] = useState({mail: "", password: ""})
    const navigate = useNavigate();

    const handleChangeInput = (e)=> {
        const {name, value} = e.target;

        setDataLogin((oldValue)=> ({
            ...oldValue,
            [name]:value
        }))
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()
        try {
            const result = await postLogin(dataLogin)
            console.log(result);
            setUserIsLogged(true)
            navigate("/")
        } catch (error) {
            console.log("error al aloguear en el front : " + error);
            
        }

    }

    return(
        <div className="h-screen w-full flex flex-col items-center text-[var(--sand)] "> 
            
            <form className="flex flex-col mt-20 justify-center items-center gap-7.5 w-full" onSubmit={handleSubmit}>
                <div>
                    <label className="flex flex-col font-medium" htmlFor="">Mail
                        <input name="mail" className="mt-1 placeholder-gray-400 bg-gray-200 border-none rounded-sm px-3 py-1 focus:outline-none focus:transition-all focus:border-none focus:drop-shadow-md focus:drop-shadow-white " onChange={handleChangeInput} type="email" />
                    </label>

                    <label className="flex flex-col font-medium" htmlFor="">Password
                        <input name="password" className="mt-1 placeholder-gray-400 bg-gray-200 border-none rounded-sm px-3 py-1 focus:outline-none focus:transition-all focus:border-none focus:drop-shadow-md focus:drop-shadow-white " onChange={handleChangeInput} type="password" />
                    </label>
                </div>

                <div className="mt-10 flex gap-7.5">
                    <button className="border-1 font-bold py-2 px-4 rounded-lg border-[var(--blue)] bg-[var(--darkBlue)]" type="submit">Send</button>
                    <button className="border-1 font-bold py-2 px-4 rounded-lg border-[var(--darkBlue)] bg-[var(--blue)]" type="reset">Reset</button>
                </div>
            </form>
            
        </div>
    )
}

export default Login