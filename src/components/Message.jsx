import { useEffect, useState } from "react"
import { addNewMessage, fetchAllMessages } from "../services/messageSrvice"

const Messages = () => {
    const [messages, setMessages] = useState([])
    const [msg, setMsg] = useState()
    
    async function peticion(){
        const json = await fetchAllMessages()
        setMessages(json)
    }
    
    useEffect( () => {
        peticion()
        const programmer = setInterval(peticion, 2000)
        return () => clearInterval(programmer)
    }, [])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const newMsg = await addNewMessage(msg)
        setMessages([...messages, newMsg])
    }

    return (
        <>
            <h1>Lista de mensajes del chat</h1>
            <div>
                {messages.map(msg=><div key={msg._id}>{msg.msg}</div>)}
            </div>
            <form action="">
                <input type="text" name="msg" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
        
    )

}
export default Messages