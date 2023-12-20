const createtodo = async ()=>{
    let options ={
        method: "POST",
        Headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'harry',
            body: 'bhai',
            userId: 1100,
        })
    }

let p= await fetch('https://jsonplaceholder.typicode.com/posts', options)
        let response= await p.json()
        return response;
}

const mainfunc =async()=>{
    let todo =await createtodo()
    console.log(todo)
}
mainfunc()