
async function fetchAllUsers(){
    const response = await fetch(import.meta.env.VITE_BACKEND+'/users/')
    return await response.json()
}

async function fetchMyUser(){
    
    const response = await fetch(import.meta.env.VITE_BACKEND+'/users/myUser/', {
        method:'GET',
        headers:{
            'Authorization': `bearer ${localStorage.getItem("token")}`,
        }
    })
    return response
}

async function addNewUser(name, email, pass){
    const response = await fetch(import.meta.env.VITE_BACKEND+'/users/', {
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({name:name, email:email, pass:pass})
    })
    
    
    return response
}


async function logIn(email, pass){
    const response = await fetch(import.meta.env.VITE_BACKEND+'/auth/login', {
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({email:email, pass:pass})
    })
    
    return response

}
export {fetchAllUsers, addNewUser, logIn, fetchMyUser}