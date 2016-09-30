import $ from 'jquery';
import {Car} from './classes/car.js'
import {Drone} from './classes/drone.js'
import {fleet} from './fleet-data.js'

import {FleetDataService} from './services/fleet-data-service.js'

import {Button} from './ui/button.js'
import {Image} from './ui/image.js'
import {TitleBar} from './ui/title-bar.js'

// let dataService = new FleetDataService()
// dataService.loadData(fleet);
//
// let cars = dataService.filterCarsByMake('e');
//
// for(let car of cars)
//   console.log(car.make);

let tb = new TitleBar('Our Application');
tb.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));
//
// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'));
