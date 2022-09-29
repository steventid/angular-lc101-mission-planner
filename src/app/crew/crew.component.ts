import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = null;

  crewMessage: string = '';

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    if(memberName === '') {
      this.crewMessage = 'Please enter a valid name!';
      return;
    }
    for(let member of this.crew) {
      if(member['name'] === memberName) {
        this.crewMessage = `${memberName} is already in the crew!`;
        return;
      }
    }
    this.crew.push({name: memberName, firstMission: isFirst});
    this.crewMessage = '';
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
 }

 save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }

}
