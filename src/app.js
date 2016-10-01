import $ from 'jquery';
import {fleet} from './fleet-data.js'
import {FleetDataService} from './services/fleet-data-service.js'
import {ApplicationBase} from './framework/application-base.js'
import {Button} from './ui/button.js'
import {Image} from './ui/image.js'
import {TitleBar} from './ui/title-bar.js'
import {DataTable} from './ui/data-table.js'

export class App extends ApplicationBase {
  constructor() {
    super('Fleet Manager')
    this.dataService = new FleetDataService()
    this.dataService.loadData(fleet);
    this.addRoute('Home', null, true)
    this.addRoute('Cars', null)
    this.addRoute('Drones', null)
    this.addRoute('Map', null)
  }
}

export let application = new App();
application.show($('body'));

let headers = 'License Make Model Miles'.split(' ');
let dataService = new FleetDataService();
dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));

// let dataService = new FleetDataService()
// dataService.loadData(fleet);
//
// let cars = dataService.filterCarsByMake('e');
//
// for(let car of cars)
//   console.log(car.make);

// let tb = new TitleBar('Our Application');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));
//
// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'));
