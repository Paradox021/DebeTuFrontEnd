import { useEffect, useState } from "react"
import AddDebt from "../components/AddDebt"
import Debts from "../components/Debts"


const MyDebtors = () => {
    
    const [debtors, setDebtors] = useState([])
 
    useEffect(() => {
        const fetchingUsers = async () => {
            //const data = await getMyDebtors()
            const data = await fetch(import.meta.env.VITE_BACKEND+'/connection/myDebtors/', {
                method:'GET',
                headers:{
                'Authorization': `bearer ${localStorage.getItem("token")}`,
                }
                })
            const conexiones = await data.json()
            setDebtors(conexiones)
        }

        fetchingUsers()
    }, [])


    async function handleRemoveDebt(idDebt, idConnection){
      const response = await fetch(import.meta.env.VITE_BACKEND+`/connection/removeDebt/${idConnection}/${idDebt}`, 
      {
          method:'DELETE',
          headers:{
              'Authorization': `bearer ${localStorage.getItem("token")}`,
          }
      })
      const data = await response.json()
      console.log(data)

      const newDebtors = [...debtors]
      const debtorToRemove = newDebtors.find(e => e._id === idConnection)
      debtorToRemove.debts = data.debts
      setDebtors(newDebtors)
    }

    const handleSubmit = async(e, idConnection, concept, amount)=>{
      e.preventDefault()
      console.log(idConnection)
      const response = await fetch(import.meta.env.VITE_BACKEND+'/connection/addDebt/'+idConnection, {
      method:'POST',
      headers:{
          'content-Type':'application/json',
          'Authorization': `bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({concept, amount})
      })
      if(!response.ok) console.log('error en la peticion')
      const newConnection = await response.json()
      console.log(newConnection)

      const newDebtors = [...debtors]
      const debtorToAdd = newDebtors.find(e => e._id === idConnection)
      debtorToAdd.debts = newConnection.debts
      setDebtors(newDebtors)
    }


    return <>
        <h1>Listado de mis deudores</h1>
        <ul>
        {debtors.map((debtor) => (
          <li key={debtor._id}>
            <h2>
              Deudor: {debtor.debtor.name} ({debtor.debtor.email})
            </h2>
            <Debts debts = {debtor.debts} idConnection={debtor._id} handleRemove={(idDebt) => handleRemoveDebt(idDebt, debtor._id)}></Debts>
            <AddDebt idConnection = {debtor._id} handleSubmit={(e, concept, amount)=>handleSubmit(e, debtor._id, concept, amount)} ></AddDebt>      
          </li>
        ))}
      </ul>
    </>

}
export default MyDebtors