import { useEffect, useState } from "react"
import { fetchMyUser } from "../services/userService"

const MyUser = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    async function peticion(){
        const response = await fetchMyUser()
        setUser(await (response).json())
    }
    
    useEffect( () => {
        setLoading(true)
        peticion()
        setLoading(false)
    }, [])

    if(loading) return <div>Loading...</div>
 
    return (
        <>
            <h1>Mis datos</h1>
            <div >
                
                        <div key={user._id}>User: {user.name}</div>
                        <div key={user._id}>Email: {user.email}</div>
                        <div key={user._id}>Creado en: {user.createdAt}</div>       
            </div>
        </>
        
    )

}
export default MyUser