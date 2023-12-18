/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    HELLO WORLD
    <script src="a3.js"></script>
</body>
</html>*/



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
    console.log("fetched delhi weather :" + dew)
    console.log("fetching bangalore weather please wait...")
    let bw= await bangaloreweather   // waits till the promise mentioned is resolved/reject
    console.log("fetched bangalore weather :" + bw)
    return(dew,bw)
 }
const cherry= async()=>{
             console.log("hey i am cherry and i am not running")
}

const main1= async()=>{
       console.log("welcome to weather control room")
       let a= await harry()
       let b= await cherry()
       
}
main1()