/*Hoisting refers to the process where by the inerpreter appears to move
the declarations to the top of the code before execution*/

//the first two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()
function greet(){
    console.log("Good Morning")
}
greet()
var a = 5   // declaration to the top but initialiazation is not
console.log(a)// in case of "let" initialization should be done first
// "function exprsssions means (used with '=')" and class expressions are not hoisted
//var can also not be used to hoist a function