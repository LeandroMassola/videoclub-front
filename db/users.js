import { jwtDecode } from "jwt-decode"

export const getUserFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const userData = jwtDecode(token)
    return userData.id
}

export const getUserById = async (id) => {
    try {
        const token = localStorage.getItem("token")

        const response = await fetch(`http://localhost:8000/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })

        const data = await response.json()

        if(!response.ok) {
        console.log("error al buscar el usuario en el back: ", data);
        return null
        }

        return data.user
    } catch (error) {
        console.log("entro al catch del getUserId = " + error);
        return null
    }
}


export const postRegister = async(dataForm) => {

    try {

        const response = await fetch("http://localhost:8000/user/register", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataForm)
            })

            const data = await response.json()

            if(!response.ok) {
                console.log("error al registrar")
            }
            console.log("Se registro correctamente")
            
            return data

    } catch (error) {
        console.log("error al hacer post: " + error);
    }
}

export const postLogin = async (dataLogin) => {
    try {

        const response = await fetch("http://localhost:8000/user/login", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataLogin)
            })

            const data = await response.json()
            
            if(!response.ok) {
                console.log("error al loguear")
            }
            console.log("Se logueo correctamente")

            localStorage.setItem("token", data.token)
            
            return data

    } catch (error) {
        console.log("error al hacer log: " + error);
    }
}

