class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  fly() {
    console.log('Drone ' + this.id + ' is flying.');
  }

  // Static Method
  static getCompany() {
    console.log('In getCompany');
  }
}

let drone = new Drone('A123', 'Flyer')
let drone2 = new Drone('B456', 'Twirl')

drone.fly();
drone2.fly();
Drone.getCompany();
drone.getCompany(); // throws error
