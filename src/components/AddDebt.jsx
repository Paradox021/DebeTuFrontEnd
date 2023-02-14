import { useState } from "react"

const AddDebt = ({idConnection, handleSubmit}) => {

    const [concept, setConcept] = useState()
    const [amount, setAmount] = useState()
 

    /*const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(idConnection)
        const response = await fetch('http://localhost:3000/connection/addDebt/'+idConnection, {
        method:'POST',
        headers:{
            'content-Type':'application/json',
            'Authorization': `bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({concept, amount})
    })
        if(!response.ok) console.log('error en la peticion')
        console.log(await response.json())
    }*/


    return (
        <>
            <form className="flex gap-3 justify-center items-center" action="" onSubmit={(e)=>handleSubmit(e, concept, amount)}>
                <label htmlFor="concept">concept:</label>
                <input className="h-6" type="text" name="concept" value={concept} onChange={(e)=>setConcept(e.target.value)}/>
                <label htmlFor="amount">amount:</label>
                <input className="h-6" type="text" name="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <button type="submit">Añadir deuda</button>
            </form>
        </>
        
    )

}

export default AddDebt