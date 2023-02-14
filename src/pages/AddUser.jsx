import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addNewUser } from "../services/userService"

const AddUser = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const navigate = useNavigate()
 

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await addNewUser(name, email, pass)
        if(!response.ok) console.log('error en la peticion')
        else navigate('/users')
    }

    return (
        <>
            <h1>Registrarse</h1>
            <form className="flex flex-col gap-3" action="">
                <label htmlFor="name">name:</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="email">email:</label>
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password">password:</label>
                <input type="password" name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
        
    )

}
export default AddUser