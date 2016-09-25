class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
// Static Properties or Class Properties
Drone.maxHeight = 2000;

let drone = new Drone('A123', 'Flyer')
let drone2 = new Drone('B456', 'Twirl')
console.log(drone.id + ' ' + drone2.id);
console.log(Drone.maxHeight);
console.log(drone.maxHeight);

// console.log(typeof Drone);
// console.log(typeof drone);
// console.log(drone instanceof Drone);

// Init
// console.log('in app.js')

// Strict Mode
// let droneId = 5;
// console.log(window.droneId)
