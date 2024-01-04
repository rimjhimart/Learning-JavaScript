const prompt =require("prompt-sync")()
let initial = Math.floor(Math.random() * 101); // will get the random number

  let a = prompt("guess the number ")
a = Number.parseInt(a)
while(a!=initial){
 if(a>initial){
    console.log("your number is greater")
    a = prompt("try again : ")
}
else if(a<initial){
    console.log("your number is smaller")
    a = prompt("try again : ")
}
}
if(a==initial){
  console.log("your guess is right")
   console.log("The correct number was : ",initial)
}
