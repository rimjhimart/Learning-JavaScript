const prompt =require("prompt-sync")()


let initial = Math.floor(Math.random() * 101); // will get the random number 

for(let i=1;i<=100;i++){
    let variable=prompt("Enter your guess:- ");
    if(initial != variable){
        if(initial>variable){
            console.log("Guess was smaller then the original number ");   
        }
        else{
            console.log("Guess was larger then the original number ");
        }
    }
    else{
        console.log("Correct guess");
        console.log("The correct number was : ",initial)
        console.log("Your score is - ",100-i);
        break;
    }
}