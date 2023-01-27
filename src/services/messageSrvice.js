async function fetchAllMessages(){
    const response = await fetch('http://localhost:3000/message/')
    return await response.json()
}

async function addNewMessage(msg){
    const response = await fetch('http://localhost:3000/message/', {
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({msg})
    })
    return await response.json()
}

export {fetchAllMessages, addNewMessage}