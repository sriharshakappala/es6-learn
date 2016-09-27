import {Car} from './classes/car.js'
import {Drone} from './classes/drone.js'
import {fleet} from './fleet-data.js'

import {FleetDataService} from './services/fleet-data-service.js'

let dataService = new FleetDataService()
dataService.loadData(fleet);

console.log('Get car by License');
let car = dataService.getCarByLicense('AT2000')
console.log(car)

console.log('Sort Function');
let cars = dataService.getCarsSortedByLicense();
for (let car of cars)
  console.log(car.license);

// for (let car of dataService.cars)
//   console.log(car.license);
//
// for (let drone of dataService.drones)
//   console.log(drone.license);
//
// for (let e of dataService.errors)
//   console.log(e.message);
