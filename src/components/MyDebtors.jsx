import { useEffect, useState } from "react"


const MyDebtors = () => {
    
    const [debtors, setDebtors] = useState([])
 
    useEffect(() => {
        const fetchingUsers = async () => {
            //const data = await getMyDebtors()
            const data = await fetch('http://localhost:3000/connection/myDebtors/', {
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

    return <>
        <h1>Listado de mis deudores</h1>
        <ul>
        {debtors.map((debtor) => (
          <li key={debtor._id}>
            <h2>
              Deudor: {debtor.debtor.name} ({debtor.debtor.email})
            </h2>
            <ul>
                {debtor.Debts.map((debt) => (<li key={debt._id}> deuda: {debt.concept} {debt.amount}</li>))}
            </ul>
            
          </li>
        ))}
      </ul>
    </>

}
export default MyDebtors