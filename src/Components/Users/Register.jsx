import { useState } from "react"
import { postRegister } from "../../../db/users";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [dataForm, setDataForm] = useState({name:"", surname: "", mail: "", password: ""})
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleChangeInput = (e)=> {
        const {name, value} = e.target;

        setDataForm((oldValue)=> ({
            ...oldValue,
            [name]:value
        }))
    }

    const handleSubmit = async (e)=> {
        try {
            const result = await postRegister(dataForm)
            console.log(result);

            if(result.errors){
                setErrors(result.errors)
            } else {
                setErrors({})
                navigate("/login")
            }
        } catch (error) {
            console.log("error de registro en el front: " + error);
        }
        
    }

    return(
        <form method="POST" onSubmit={handleSubmit} className="h-screen w-full flex flex-col items-center text-[var(--sand)] ">
            <h3 className="mt-20 text-2xl">Create account</h3>
            <div className="flex flex-col mt-20 justify-center items-center gap-7.5 w-full">
                <label className="flex flex-col font-medium" htmlFor="name">Name 
                    <input id="name" className="mt-1 placeholder-gray-400 bg-gray-200 border-none rounded-sm px-3 py-1 focus:outline-none focus:transition-all focus:border-none focus:drop-shadow-md focus:drop-shadow-white " onChange={handleChangeInput} placeholder="type your name" name="name" type="text"/>
                    {errors.name && <p>{errors.name.msg}</p>}

                </label>

                <label className="flex flex-col font-medium" htmlFor="surname">Last Name 
                    <input id="surname" className="mt-1 placeholder-gray-400 bg-gray-200 border-none rounded-sm px-3 py-1 focus:outline-none focus:transition-all focus:border-none focus:drop-shadow-md focus:drop-shadow-white " onChange={handleChangeInput} placeholder="Type your last name" name="surname" type="text" />
                    {errors.surname && <p>{errors.surname.msg}</p>}
                </label>

                <label className="flex flex-col font-medium" htmlFor="mail">Email 
                    <input id="mail" className="mt-1 placeholder-gray-400 bg-gray-200 border-none rounded-sm px-3 py-1 focus:outline-none focus:transition-all focus:border-none focus:drop-shadow-md focus:drop-shadow-white " onChange={handleChangeInput} placeholder="Introduce a valid email" name="mail" type="email" />
                    {errors.mail && <p>{errors.mail.msg}</p>}
                </label>

                <label className="flex flex-col font-medium" htmlFor="password">Password 
                    <input id="password" className="mt-1 placeholder-gray-400 bg-gray-200 border-none rounded-sm px-3 py-1 focus:outline-none focus:transition-all focus:border-none focus:drop-shadow-md focus:drop-shadow-white " onChange={handleChangeInput} placeholder="Create a password" name="password" type="password" />
                    {errors.password && <p>{errors.password.msg}</p>}
                </label>
            </div>

            <div className="mt-10 flex gap-7.5">
                <button className="border-1 font-bold py-2 px-4 rounded-lg border-[var(--blue)] bg-[var(--darkBlue)]" type="submit">Send</button>
                <button className="border-1 font-bold py-2 px-4 rounded-lg border-[var(--darkBlue)] bg-[var(--blue)]" type="reset">Reset</button>
            </div>
        </form>
    )
}

export default Register