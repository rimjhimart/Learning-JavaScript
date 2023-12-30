

/*message = "Good Global"
function hello(){
    message = "Good Morning"
    console.log("Hello 1 " + message)
}

hello()

message2 = "Good Global"
function hello2(){
    //message = "Good Morning"
    console.log("Hello 1 " + message2)
}

hello2()



message1 = "Great Global"
function hello1(){
    message1 = "Good Morning"
    {
        let message1 = "Good Morning"
        console.log("Hello 2 " + message1)
    }
    console.log(message1)
}

hello1()*/


message3 = "Great Global"
function hello3(){
    message3 = "Good Morning"
    {
        let message3 = "Good Morning"
        console.log("Hello 3 " + message3)
    }
    let c = function hii(){
        console.log("i am c " + message3)  
    }
    return c
}
c = hello3()
c()

function init(){
    var name = 'Mozilla'; //name is a local variable created by int
    function displayName(){
        // displayName() is the inner function, a closure
        console.log(name);// use variable declared in the parent function
    }
    name = "Sugar"
    return displayName;
}
let c2 = init();
c2()