import { Component, OnInit } from '@angular/core';
import { Car } from '../domain/car';
import { CarService } from '../services/car.service';
import { SelectItem } from 'primeng/components/common/api';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [MessageService]
})
export class GridComponent implements OnInit {

    cars: Car[];

    brands: SelectItem[];

    dataChanges: any;

    dataDirty: any;

    dataChangedDropdown: any;

    items: MenuItem[];

    // showChangedData($event: any){
    //   this.messageService.add({ severity: 'info', summary: 'Car Edited', detail: car.vin + ' - ' + car.brand });
    // }

    selectedCar: Car;

    cellEdit($event: any, car: Car) {
      debugger;
      this.dataChanges = $event.target.value;
      console.log(this.dataChanges);
      console.log($event);
      this.messageService.add({ severity: 'info', summary: 'Car Edited', detail: car.vin + ' - ' + car.brand });
    }

    cellDirty($event: any) {
      debugger;
      this.dataDirty = $event.target.value;
      console.log(this.dataDirty);
    }

    cellDropDown($event: any) {
      this.dataChangedDropdown = $event.target.textContent;
      console.log(this.dataChangedDropdown);
    }

    deleteCar(car: Car) {
      let index = -1;
      for (let i = 0; i < this.cars.length; i++) {
          if (this.cars[i].vin === car.vin) {
              index = i;
              break;
          }
      }
      this.cars.splice(index, 1);
  }


  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit() {
    this.carService.getCarsSmall().subscribe(cars => this.cars = cars);

    this.brands = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];
    this.items = [
    { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedCar) }
];
  }
}
