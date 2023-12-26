class Bird{
    constructor(name){
        this._name = name
    }
    fly(){
        console.log(`this one can fly`)
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name= newName
    }
}

class Animal extends Bird {
    notfly(){
        console.log("this one can not fly")
    }
}

let a = new Bird("seagull")
a.fly()
console.log(a.name)
a.name="flamingo"
console.log(a.name)
let b = 78

//instanceof operator = allow to check whether the obj belongs to a certain class or not. 
console.log(a instanceof Bird)    //o/p= true
console.log(a instanceof Animal)  //o/p= true
console.log(b instanceof Bird)    //o/p= false
