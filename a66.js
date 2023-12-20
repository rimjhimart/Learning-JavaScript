let p = fetch("https://goweather.herokuapp.com/weather/LDN")
p.then((value1)=>{
    console.log(value1.status)
    console.log(value1.ok)
    return value1.json()
}).then((value2)=>{
    console.log(value2)
})
 /*request headers syntax
let res = fetch((URL, }
    headers:{
        authentiacation:'secret'
    }
})*/

