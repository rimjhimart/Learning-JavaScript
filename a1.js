
async function harry(){
let delhiweather= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("27 degree")
    }, 1000)
})

let bangaloreweather= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("21 degree")
    }, 2000)
})
delhiweather.then(alert)
bangaloreweather.then(alert)
}
console.log("welcome to weather control room")
harry()

/*async function sugar(){
    return 5
}

sugar().then((x)=>{
    alert(x)
})*/
