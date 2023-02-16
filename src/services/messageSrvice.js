async function fetchAllMessages(){
    const response = await fetch(import.meta.env.VITE_BACKEND+'/message/')
    return await response.json()
}

async function addNewMessage(msg){
    const response = await fetch(import.meta.env.VITE_BACKEND+'/message/', {
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({msg})
    })
    return await response.json()
}

export {fetchAllMessages, addNewMessage}