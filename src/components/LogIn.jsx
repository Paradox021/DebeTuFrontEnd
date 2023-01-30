import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { logIn } from "../services/userService"
import Button  from "./Button"

const LogIn = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await logIn(email, pass)
        if(!response.ok) console.log('error en el log in')
        else{
            navigate('/chat')
            localStorage.setItem("token", (await response.json()).token);
        } 
    }

    return (
        <>
            <h1>Iniciar sesion</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit} action="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="email">Email:</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="password">Password:</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="password" name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <Button>Log in</Button>
            </form>
        </>
        
    )

}
export default LogIn