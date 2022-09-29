import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', born: 'May 26, 1951', died: 'July 23, 2012'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', born: 'October 17, 1956', died: 'N/A'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', born: 'May 10, 1958', died: 'N/A'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', born: 'January 7, 1941', died: 'N/A'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', born: 'November 22, 1942', died: 'N/A'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', born: 'January 23, 1973', died: 'N/A'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', born: 'November 3, 1970', died: 'N/A'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(member: object) {
    if (this.crew.includes(member)) {
      this.crew.splice(this.crew.indexOf(member),1);
      return;
    }
    if (this.crew.length < 3) {
      this.crew.push(member);
    }
  }
}
