//print the element of array with the help of for loop
let class_marks = [91, 82, 56, 69, 85]
for(let i = 0;i<class_marks.length;i++){
  console.log(class_marks[i])
  
}

//arrays methods
let num = [88, 54, 96, 73, 68]
let b = num.toString()   //array to string
console.log(b)
console.log(typeof b)

let c = num.join("&")    //join() it joins 
console.log(c)
console.log(typeof c)

let r = num.pop()    // pops  the last element
console.log(num)
console.log(r)      // returns the last element
 
let s = num.push(69)     //modify new array and returns length
console.log(num,s)

let t = num.shift()      // remove first item and returns
console.log(num, t)
console.log(num)

let a = num.unshift(78)   // add element to the begining
console.log(num, a)

console.log(num.length)   //delete element without decreading length
delete num[0]
console.log(num.length)
console.log(num)

let num_more = [82, 59, 75]         //joins two arrays element
let newarray = num.concat(num_more)
console.log(newarray)

num.sort()       //sort arrays element alphabetically
console.log(num)

let compare = (c, d) =>{      // comapring using sort method with function
  return c-d
}
let v = num.sort(compare)
console.log(num, v)

num.splice(1, 2, 52, 66)          //slice out a piece and exchange elements as provided
console.log(num)
let deletedvalues = num.splice(1, 2, 52, 66)
console.log(num)
console.log(deletedvalues)

let newnum = num.slice(3)      //slice out a piece of array and create a new array
console.log(newnum) 

let newnum2 = num.slice(4)      //slice out a piece of array and create a new array
console.log(newnum2) 