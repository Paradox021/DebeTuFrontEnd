import { useState } from "react"

const ConnectToCreditor = () => {
    const [email, setEmail] = useState()
    async function connect(){
        const response = await fetch('http://localhost:3000/connection/connectToCreditor/'+email, {
            method:'POST',
            headers:{
                'Authorization': `bearer ${localStorage.getItem("token")}`,
            }
        })
        return response
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await connect(email)
        if(!response.ok) console.log('error al conectar')
        else{
            console.log(await response.json())
        } 
    }

    return <form onSubmit={handleSubmit} action="">
        <label htmlFor="email">email: <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} /></label>
        <button>Conectar</button>
    </form>
}

export default ConnectToCreditor