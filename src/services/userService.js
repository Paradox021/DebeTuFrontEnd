
async function fetchAllUsers(){
    const response = await fetch('http://localhost:3000/users/')
    return await response.json()
}

async function fetchMyUser(){
    
    const response = await fetch('http://localhost:3000/users/myUser/', {
        method:'GET',
        headers:{
            'Authorization': `bearer ${localStorage.getItem("token")}`,
        }
    })
    return response
}

async function addNewUser(name, email, pass){
    const response = await fetch('http://localhost:3000/users/', {
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({name:name, email:email, pass:pass})
    })
    
    
    return response
}


async function logIn(email, pass){
    const response = await fetch('http://localhost:3000/auth/login', {
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({email:email, pass:pass})
    })
    
    return response

}
export {fetchAllUsers, addNewUser, logIn, fetchMyUser}