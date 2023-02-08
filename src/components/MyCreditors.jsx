import { useEffect, useState } from "react";
import ConnectToCreditor from "./ConnectToCreditor"


const MyCreditors = () => {
    
 
    const [creditors, setCreditors] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchingCreditors = async () => {
          const request = await fetch('http://localhost:3000/connection/myCreditors',
          {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token,
            }
          })
          const arrayDeConexiones = await request.json()
          setCreditors(arrayDeConexiones)
        }
    
        fetchingCreditors()
      }, [])


    return <>
        <ConnectToCreditor/>
        <h1>Listado de mis acreedores</h1>
        <ul>
        {creditors.map((creditor) => (
          <li key={creditor._id}>
            <h2>
              Acreedor: {creditor.creditor.name} ({creditor.creditor.email})
            </h2>
            <ul>
                {creditor.Debts.map((debt) => (<li key={debt._id}> deuda: {debt.concept} {debt.amount}</li>))}
            </ul>
          </li>
        ))}
      </ul>
    </>

}
export default MyCreditors