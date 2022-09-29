import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipment: object) {
    this.cargoHold.push(equipment);
    this.cargoMass += equipment['mass'];
    return(this.maximumAllowedMass - this.cargoMass <= 200);
   }

   removeItem(index: number) {
    this.cargoMass -= this.cargoHold[index]['mass'];
    this.cargoHold.splice(index,1);
    return(this.maximumAllowedMass - this.cargoMass <= 200);
   }

   cargoCount(equipment: object) {
    let count = 0;
    for (let cargo of this.cargoHold) {
      if (cargo === equipment) {
        count++;
      }
    }
    return count;
   }

   disableButton(equipment: object) {
    return (this.cargoHold.length === this.maxItems || this.cargoMass + equipment['mass'] > this.maximumAllowedMass || this.cargoCount(equipment) >= 2);
   }

   emptyHold() {
    this.cargoHold = [];
    this.cargoMass = 0;
   }
   
}
