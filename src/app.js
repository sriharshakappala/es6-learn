class Vehicle {

  constructor() {
    console.log('constructing Vehicle');
  }

}

class Drone extends Vehicle {

}

class Car extends Vehicle {

  constructor() {
    console.log('constructing Car');
  }

}

let c = new Car();
