//local storage

let key= prompt("Enter key you want to set")
let value= prompt("Enter value you want to set")

 //1) localStorage.setItem
localStorage.setItem(key, value) 

//2) localStorage.getItem
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
if(key=="red"|| key=="blue"){
    //3) localStorage.removeItem
    localStorage.removeItem(key)
}

if (key==0) {
    //4) localStorage.clear
    localStorage.clear(key)
}

/*5) localStorage.length   (type in console of inspect of web page)
localStorage.key(0/1/2(whatever ur choice)) = gives u the content of that choosen key*/
// JSON.Stringify(object)   converts obj into string
//JSON.parse(string) converts string to obj