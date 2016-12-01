/**
 * Created by pears on 11/25/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

import 'rxjs/add/operator/switchMap';

import { Project, Person, ProjectService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'project-detail',
  templateUrl: 'project-detail.component.html',
  styleUrls: ['project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  newPersonName: string = "";
  editProjectName: boolean = false;
  editProjectDescription: boolean = false;
  isMouseOverName: boolean = false;
  mouseState: any = {
    over: {}
  }; // Refactor into a class so it's not a generic any type
  mouseEventTimers: any = {};

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(params['id']))
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }
  
  // addPersonToProject(): void {
  //   if(this.newPersonName && this.newPersonName != "" ) {
  //     let newPerson: Person = new Person(this.newPersonName);
  //     this.projectService.addPersonToProject(this.project._id, newPerson)
  //       .then(() => this.project.people_on_project.push(newPerson), 
  //       () => console.log("Failed Promise"));
  //     this.newPersonName = "";
  //     console.dir(this.project);
  //   }
  // }
  
  toggleEditProjectName(): void {
    this.editProjectName = !this.editProjectName;
    console.log(this.editProjectName);
  }
  
  toggleEditProjectDescription(): void {
    this.editProjectDescription = !this.editProjectDescription;
  }
  
  save(): void {
    this.projectService.updateProject(this.project)
      .then(
        res => {this.project = res},
        mes => console.log(mes));
  }
  
  addPersonToProject(personName: string): void {
    let newPerson: Person = new Person(personName);
    this.project.people_on_project.push(newPerson);
    this.save();
  }
  
  removePersonFromProject(index: number) {
    this.project.people_on_project.splice(index, 1);
    this.save();
  }
  
  mouseOverName(isOver: boolean): void {
    console.dir(this.mouseEventTimers);
    if(this.mouseEventTimers.isMouseOverName) {
      clearTimeout(this.mouseEventTimers.isMouseOverName);
    }
    if(isOver == false) {
      this.mouseEventTimers.isMouseOverName = setTimeout(() => {
        this.isMouseOverName = isOver;
        }, 750);
    } else {
      this.isMouseOverName = isOver;
    }
  }
  
  mouseOver(element: string, isOver: boolean, timeout: number = 750): void {
    console.dir(this.mouseState);
    console.dir(this.mouseEventTimers);
    if(this.mouseEventTimers[element]) {
      clearTimeout(this.mouseEventTimers[element]);
    }
    if(isOver == false) {
      this.mouseEventTimers[element] = setTimeout(() => {
        this.mouseState.over[element] = isOver;
        }, timeout);
    } else {
      for(var prop in this.mouseState.over) {
        this.mouseState.over[prop] = false;
      }
      this.mouseState.over[element] = isOver;
    }
  }
}