import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ]
  equipmentBeingEdited: string = '';

  equipmentMessage: string = '';

  constructor() { }

  ngOnInit() {
  }

  add(newEquipment: string) {
    if(newEquipment === '') {
      this.equipmentMessage = 'Please enter a valid equipment name!';
      return;
    }
    if(this.equipment.includes(newEquipment)){
      this.equipmentMessage = `${newEquipment} is already on the equipment list!`;
    } else {
      this.equipment.push(newEquipment);
      this.equipmentMessage = '';
    }
  }

  remove(equipment: string) {
    let index = this.equipment.indexOf(equipment);
    this.equipment.splice(index, 1);
  }

  edit(equipment: string) {
    this.equipmentBeingEdited = equipment;
  }

  save(equipment: string, newEquipment: string) {
    let index = this.equipment.indexOf(equipment);
    this.equipment[index] = newEquipment;
    this.equipmentBeingEdited = '';
  }

}
