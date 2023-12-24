let a = {
    name2: "Sugarcandy",
    language: "javascript",
    run:()=>{
        alert("self run")
    }
}
   console.log(a)


let p = {
    run:()=>{
        alert("run")
    }
}

p.__proto__ = {
    name:"jack"
}

a.__proto__=p
a.run()
console.log(a.name)

