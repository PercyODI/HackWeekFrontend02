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
  
  addPersonToProject(): void {
    if(this.newPersonName && this.newPersonName != "" ) {
      let newPerson: Person = new Person(this.newPersonName);
      this.projectService.addPersonToProject(this.project._id, newPerson)
        .then(() => this.project.people_on_project.push(newPerson), 
        () => console.log("Failed Promise"));
      this.newPersonName = "";
      console.dir(this.project);
    }
  }
  
  toggleEditProjectName(): void {
    this.editProjectName = !this.editProjectName;
    console.log(this.editProjectName);
  }
  
  save(): void {
    this.projectService.updateProject(this.project);
  }
}