//const prompt =require("prompt-sync")()

alert("Hello")
let a = setTimeout(function(){
    alert("i am inside of setTimeout")
}, 2000)           //1000ms=1sec
console.log(a)

// to clear the timeout
//clearTimeout(a)         nothing will pop up after 2 sec
//console.log(a)


//let b = prompt("do you want to create settimeout")
//if(b=="no"){
   // clearTimeout(a)
//}
//console.log(a)

const sum=(a,b) =>{
    console.log("yes i sm running" + (a+b))
    a+b
}
setTimeout(sum, 1000, 1, 2)     //here  ... a=1, b=2