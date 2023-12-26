//method overriding
class Employee{
   /*constructor(name){
       console.log(`${name} - Employee's contructor is here`)  
     this.name = name
  }*/
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
  //  constructor(name){
   //     console.log(`${name} - Programmer's contructor is here`)
  //      this.name = name
  //  }  this will throw error because derived class must contain SUPER constructor 
// so we can write as//
constructor(name){
    super(name)
    console.log(`this is newly written`)
}

 //   constructor(...argument){
//     super(...argument)
//    }                 [added by javascript automatically, whenever constructor is used in Employee class] 
    requestCoffee(){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4)          //to call parent
        console.log(`one extra is granted`)
    }
}

let e = new Programmer("preet")      // name will show only in Employee class(this.name)
e.login()
e.requestLeaves(3)

