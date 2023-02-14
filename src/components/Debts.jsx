const Debts = ({debts, handleRemove}) => {
    
    const sum = debts.filter( debt => !debt.isPaid).reduce((acc, d)=> acc+d.amount, 0)
    if (!debts.length) return 'No hay deudas'

    

    return  <>
                <ul> 
                    {debts.map((debt) => (<li key={debt._id}> 
                    
                    deuda: {debt.concept} {debt.amount}
                    <button className="m-2 p-0" onClick={()=>handleRemove(debt._id)}>X</button>

                    </li>))}
                </ul>
                <div>Total: {sum}</div>
            </>
}

export default Debts