import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ]

  experimentBeingEdited: string = '';

  experimentMessage: string = '';

  constructor() { }

  ngOnInit() {
  }

  add(experiment: string) {
    if(experiment === '') {
      this.experimentMessage = 'Please enter an experiment name!';
      return;
    }
    if(this.experiments.includes(experiment)) {
      this.experimentMessage = `${experiment} is already on the experiments list!`;
      return;
    }
    this.experiments.push(experiment);
    this.experimentMessage = '';
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  save(experiment: string, newExperiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments[index] = newExperiment;
    this.experimentBeingEdited = '';
  }

}
