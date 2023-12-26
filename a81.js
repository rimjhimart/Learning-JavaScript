// STATIC METHOD IN JAVASCRIPT

class Animal{
    constructor(name){
        this.name = name  // or we can use `Animal.capitalize(name)` directly in place of = 'name' 
    }
    walk(){
        console.log("Animal " + Animal.capitalize(this.name) + " is walking")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

j = new Animal("chiku")
//j = new Animal(Animal.capitalize("chiku"))   or we can also use `Animal.capitalize` directly here instead of using in walk function
j.walk()
//static can always used with the name of class
// console also can't be used