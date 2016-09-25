class Drone {

  constructor(id, name) {
    this._id = id;
    this.name = name;
  }

  get id() {
    console.log('in id getter');
    return this._id + 'TEMP';
  }

  set id(value) {
    this._id = value
  }

}

let drone = new Drone('A123', 'Flyer')
drone.id = 'B456'
console.log('DroneID is: ' + drone.id);
