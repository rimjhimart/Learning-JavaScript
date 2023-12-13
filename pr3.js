
//insert html before element
let a = document.getElementById("first").insertAdjacentHTML("beforebegin",'<div class= "test">beforebegin</div>')

//insert html into element at the begining
let b = document.getElementById("first").insertAdjacentHTML("afterbegin",'<div class= "test">afterbegin</div>')

//insert html into element at the end
let c = document.getElementById("first").insertAdjacentHTML("beforeend",'<div class= "test">beforeend</div>')

//insert element immediately after the element
 let d=document.getElementById("first").insertAdjacentHTML("afterend",'<div class= "test">afterend</div>')

 //to remove a node
// let e = a.remove()




