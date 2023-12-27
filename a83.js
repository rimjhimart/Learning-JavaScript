/*class complex{
    constructor(real, imaginary){
        this.real =  real
        this.imaginary = imaginary
    }
    add(num){
         this.real = this.real + num.real
         this.imaginary = this.imaginary + num.imaginary
    }
}
//adding complex numbers
let a = new complex(2,4)
let b = new complex(6,2)
console.log(a.add(b))
console.log(`${a.real}+ ${a.imaginary}i`)*/


class human{
    constructor(name, favfood){
        this.name= name
        this.favfood= favfood
    }
    walk(){
        console.log(this.name + " is walking")
    }
}

class student extends human{
    walk(){
        console.log(this.name + " is running")
    }
}

let o =  new student("ratvik", " rose")
o.walk()

console.log(o instanceof human)   //o/p=TRUE