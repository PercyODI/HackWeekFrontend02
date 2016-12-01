/**
 * This component is a sub-component of the find-projects component
 * Allows users to create a new project in the list of projects
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Project, Person, ProjectService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'project-edit',
  templateUrl: 'project-edit.component.html',
  styleUrls: ['project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  // Optionally accepts a project. Could be used to allow this component to be used on existing projects
  @Input()
  project: Project = new Project();
  
  // Outputs a clickedSave event to the parent containing the updated project
  @Output()
  clickedSave = new EventEmitter<Project>();

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  
  ngOnInit(): void {}

  // Would need this code if editing existing projects. Not used now.
//   ngOnInit(): void {
//     this.route.params
//       .switchMap((params: Params) => this.projectService.getProject(params['id']))
//       .subscribe(project => this.project = project);
//   }
  
  // Sends the project to the API to save the details. Then emits the clickSaved
  // event to the parent
  // Only creates a new project API call if the project does not already have an _id property
  save(): void {
    if(!this.project._id){
      this.projectService.addProject(this.project)
        .then((project) => this.clickedSave.emit(project), (mes) => console.log(mes))
    } else {
      this.projectService.updateProject(this.project);
    }
    
    // Emit save action to parent
    
  }
  
  // Debuggin function
  consoleProject(): void {
    console.dir(this.project);
    console.log(JSON.stringify(this.project))
  }
}
