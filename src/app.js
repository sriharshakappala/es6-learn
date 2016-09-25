class Vehicle {

  constructor() {
    this.gpsEnabled = true
  }

  start() {
    console.log('starting Vehicle');
  }

  static getCompanyName() {
    console.log('My Company');
  }

}

class Drone extends Vehicle {

}

class Car extends Vehicle {

  constructor() {
    super();
    this.gpsEnabled = false;
  }

  start() {
    super.start();
    console.log('starting Car');
  }

  static getCompanyName() {
    super.getCompanyName();
    console.log('My Other Company');
  }

}

let c = new Car();
console.log(c.gpsEnabled);
c.start()
Vehicle.getCompanyName();
Car.getCompanyName();
