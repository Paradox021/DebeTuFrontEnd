import { useEffect, useState } from "react"
import { addNewUser, fetchAllUsers } from "../services/userService"

const AddUser = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


    async function peticion(){
        const json = await fetchAllUsers()
        setUsers(json)
        console.log('se ha llamado a peticion')
    }

    useEffect( ()=>{
        setInterval( peticion, 200 )
    } ,  [] )

    const handleSubmit = async (e) =>{
       e.preventDefault()
       peticion()
       const emails = users.map(user => user.email)
       console.log(emails)
       if(emails.includes(email)){
            document.getElementById("result").innerHTML="Este correo ya está registrado"
            return
       }
       if(!email.match(regexEmail)){
            document.getElementById("result").innerHTML="Error, introduzca un correo valido"
            return
       }
       const newUser = await addNewUser(name, email, password)
       document.getElementById("result").innerHTML=newUser.name&&`${newUser.name} ha sido registrado correctamente`||"Error, no se permiten campos vacios"
       setName("")
       setEmail("")
       setPassword("")
       
    }

    return (
        <div className=" flex flex-col gap-4">
            <h1>Registrarse</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <label htmlFor="name">Username:</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="border border-white" type="submit">Enviar</button>
            </form>
            <div id="result"></div>

        </div>
    )
}
export default AddUser