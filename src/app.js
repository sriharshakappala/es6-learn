class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

let drone = new Drone('A123', 'Flyer')
console.log('drone: ' + drone.id + ' ' + drone.name)
console.log('drone: ' + drone['id'] + ' ' + drone['name'])

// console.log(typeof Drone);
// console.log(typeof drone);
// console.log(drone instanceof Drone);

// Init
// console.log('in app.js')

// Strict Mode
// let droneId = 5;
// console.log(window.droneId)
