import { useEffect, useState } from "react"
import { fetchAllUsers } from "../services/userService"

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    async function peticion(){
        const json = await fetchAllUsers()
        setUsers(json)
    }
    
    useEffect( () => {
        setLoading(true)
        peticion()
        setLoading(false)
        const programmer = setInterval(peticion, 2000)
        return () => clearInterval(programmer)
    }, [])

    if(loading) return <div>Loading...</div>
    if(users.length==0) return 'No hay usuarios'
 
    return (
        <>
            <h1>Lista de usuarios del chat</h1>
            <div>
                {users.map(user=><div key={user._id}>{user.name} - {user.email}</div>)}
            </div>
        </>
        
    )

}
export default Users