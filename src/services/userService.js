async function fetchAllUsers(){
    const response = await fetch('http://localhost:3000/user/')
    const json = await response.json()
    return json
}

async function addNewUser(name, email, password){
    const response = await fetch('http://localhost:3000/user/',
    {
     method: 'POST',
     headers: {
         'Content-Type':'application/json'
     },
     body: JSON.stringify({name:name, email:email, password:password})
    }
    )
    
    if(!response.ok){
     console.log('error al hacer la inserción')
    }
    const newMessage = await response.json()
    return newMessage
}

export {fetchAllUsers, addNewUser}