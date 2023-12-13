let a= first.getAttribute("class")
console.log(a)

//to check whether the given attributes exists or not
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

let b= document.getElementById("first");
console.log(b)

//to set any attribute
 b.setAttribute("class", "true sachin")

// b.setAttribute("hidden", "true")


//to remove any attribute
b.removeAttribute("class")

//to see all the attributes
 console.log(b.attributes)