class complex{
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
console.log(a.real, a.imaginary)