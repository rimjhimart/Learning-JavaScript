const prompt =require("prompt-sync")()
//create an array of numbers and take input from the user to add number to the arrays

let arr1 = [4, 5, 6, 7, 8]
let b = prompt("enter b")
b = Number.parseInt(b)
arr1.push(b)
console.log(arr1)


//adding numbers to the array until 0 is added to the arrays
let arr2 = [1, 2, 3, 4, 5 ]
let a;
do{
     a = prompt("enter a number : ")
    a = Number.parseInt(a)
    arr2.push(a)
}while(a!=0);
console.log(arr2)


//use Filter for numbers divisible by 10 from a given array
let arr3 = [40, 10, 45, 56, 80, 90]
let a3= arr3.filter((c)=>{
    return c % 10==0;
})
console.log(a3) 

//finding squares of given number
let arr4 = [4, 5, 6, 7]
let d = arr4.map((Element)=>{
    console.log(Element)
    return Element*Element
})
console.log(d)


//
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reduce_func = (f1, f2)=>{
    return f1*f2 
}
let newarr= arr.reduce(reduce_func)
console.log(newarr)


    
    

