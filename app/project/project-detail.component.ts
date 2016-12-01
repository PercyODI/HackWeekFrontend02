/**
 * This component is used for displaying the details of a particular project
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import * as _ from 'lodash';

import 'rxjs/add/operator/switchMap';

import { Project, Person, Skill, ProjectService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'project-detail',
  templateUrl: 'project-detail.component.html',
  styleUrls: ['project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  newPersonName: string = "";
  
  // The following are flags for the view to decide when to show edit boxes
  editProjectName: boolean = false;
  editProjectDescription: boolean = false;
  editProjectDifficulty: boolean = false;
  
  // The following is to track the state of the mouse location
  mouseState: any = {
    over: {}
  }; 
  mouseEventTimers: any = {};

  // Provides access to the projectService
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  // Calls the API for the project with the ID given in the url
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(params['id']))
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }
  
  // The following are functions that modify the editing flags
  toggleEditProjectName(): void {
    this.editProjectName = !this.editProjectName;
    console.log(this.editProjectName);
  }
  
  toggleEditProjectDescription(): void {
    this.editProjectDescription = !this.editProjectDescription;
  }
  
  toggleEditProjectDifficulty(): void {
    this.editProjectDifficulty = !this.editProjectDifficulty;
  }
  
  // Sends a copy of the entire project object to the API to store in database
  save(): void {
    this.projectService.updateProject(this.project)
      .then(
        res => {this.project = res},
        mes => console.log(mes));
  }
  
  // Modify the embedded array of Person objects
  addPersonToProject(personName: string): void {
    let newPerson: Person = new Person(personName);
    this.project.people_on_project.push(newPerson);
    this.save();
  }
  
  removePersonFromProject(index: number) {
    this.project.people_on_project.splice(index, 1);
    this.save();
  }
  
  // Function to track what mouse over behavior
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
  
  addSkillToPerson(person: Person, skillName: string, skillLevel: string): void {
    if(skillName != "" && skillLevel != "") {
      let newSkill: Skill = new Skill(skillName, _.toNumber(skillLevel))
      if(!_.find(person.skills, newSkill)){
        console.log(_.find(person.skills, newSkill));
        console.log(person.skills);
        person.skills.push(newSkill);
        this.save();
      } else {
        console.log("Invalid Skill and Level");
      }
    } 
  }
  
  removeSkillFromPerson(person: Person, skill: Skill): void {
    _.remove(person.skills, skill);
    this.save();
  }
}