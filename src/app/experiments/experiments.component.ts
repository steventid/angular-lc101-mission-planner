import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   currentExperiments: string[] = [];

   message: string = "";

   constructor() { }

   ngOnInit() { }

   addExperiment(experiment: string) {
    if(this.currentExperiments.includes(experiment)) {
      this.currentExperiments.splice(this.currentExperiments.indexOf(experiment),1);
    } else {
      this.currentExperiments.push(experiment);
    }
   }

   new(experiment: string) {
    if(experiment === "") {
      this.message = "Please enter an experiment name!";
      return;
    }
    if(this.experiments.includes(experiment)) {
      this.message = `Experiment ${experiment} already on list!`;
      return;
    }
    this.experiments.push(experiment);
    this.message = "";
   }

}
