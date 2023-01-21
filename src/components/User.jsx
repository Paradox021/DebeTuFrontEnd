import { useState, useEffect } from "react"
import { fetchAllUsers } from "../services/userService"

const Users = () => {
    const [users, setUsers] = useState([])

    async function peticion(){
        const json = await fetchAllUsers()
        setUsers(json)
        console.log('se ha llamado a peticion')
    }

    useEffect( ()=>{ 
        peticion()
    } ,  [] )

    useEffect( ()=>{
        setInterval( peticion ,   2000  )
    } ,  [] )


    return (
        <>
            <h1>Lista de usuarios del chat</h1>
            <div>
                {
                users.map(user => 
                    <div key={user._id}>{user.name} - {user.email}</div>
                )
                }
            </div>

        </>
    )
}
export default Users