/**
 * Created by pears on 11/25/2016.
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
  @Input()
  project: Project = new Project();
  
  @Output()
  clickedSave = new EventEmitter<boolean>();

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  
  ngOnInit(): void {}

//   ngOnInit(): void {
//     this.route.params
//       .switchMap((params: Params) => this.projectService.getProject(params['id']))
//       .subscribe(project => this.project = project);
//   }
  
  save(): void {
    if(!this.project._id){
      this.projectService.addProject(this.project)
        .then(() => this.clickedSave.emit(true), (mes) => console.log(mes))
    } else {
      this.projectService.updateProject(this.project);
    }
    
    // Emit save action to parent
    
  }
  
  consoleProject(): void {
    console.dir(this.project);
    console.log(JSON.stringify(this.project))
  }
}
