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
    //delhiweather.then(alert)
    // bangaloreweather.then(alert)
    console.log("fetching delhi weather please wait...")  
    let dew= await delhiweather
    console.log("fetching bangalore weather please wait...")
    let bw= await bangaloreweather   // waits till the promise mentioned is resolved/reject
    return(dew,bw)
    }
    console.log("welcome to weather control room")
    let a= harry()
   a.then((value)=>{
    console.log(value)
   })