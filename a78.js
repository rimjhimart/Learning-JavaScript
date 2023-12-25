class Animal {
    constructor(name,color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name+ " is running!")
    }
    shout(){
        console.log(this.name + " is barking!")
    }
}

// simple code for animal class monkey
/*class Monkey{
    onstructor(name,color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name+ " is running!")
    }
    shout(){
        console.log(this.name + " is Shouting!")
    }
}*/

// to make change in particular word or sentence but for the whole program which contains more 2 same used code
// here shouting changed to barking for the whole program
class Monkey extends Animal {
    eatBanana(){
        console.log(this.name + " is eating banana")
    }
    hide(){
        console.log(`${this.name} is hiding`)
    }
}

let ani = new Animal("Tommy", "white")
let ani2 = new Monkey("chimpu", "orange")

ani.run()
ani.shout()
ani2.eatBanana()
ani2.hide()
ani.hide()