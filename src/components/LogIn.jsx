import { useState } from "react"
import { logIn } from "../services/userService"

const LogIn = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
 

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await logIn(email, pass)
        if(!response.ok) console.log('error en el log in')
        else localStorage.setItem("token", (await response.json()).token);
    }

    return (
        <>
            <h1>Iniciar sesion</h1>
            <form className="flex flex-col gap-3" action="">
                <label htmlFor="email">email:</label>
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password">password:</label>
                <input type="password" name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Log in</button>
            </form>
        </>
        
    )

}
export default LogIn