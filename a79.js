//method over riding
class Employee{
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
        //without changing in programmer class we get `auto approved` for programmer class also by using "SUPER KEYWORDS"
    }
}

class Programmer extends Employee{
    requestCoffee(){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log(`one extra is granted`)
        //console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
    }
}
// the function `requestLeaves` is being upgraded by using "SUPER" keyword in programmer class but now `requestLeaves` is applicable for all class wherever it is used
let e = new Programmer()
e.login()
e.requestLeaves(3)

