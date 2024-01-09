// Defining a class
class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    // Method within the class
    displayInfo() {
      return`${this.year} ${this.brand} ${this.model}`;
    }
  }
  
  // Creating an object using the class
  let myCar = new Car('Toyota', 'Corolla', 2022);
  
  // Accessing object properties and calling a method
  console.log(myCar.displayInfo());