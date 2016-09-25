class Vehicle {

  constructor() {
    this.gpsEnabled = true
  }

  start() {
    console.log('starting Vehicle');
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

}

let c = new Car();
console.log(c.gpsEnabled);
c.start()
