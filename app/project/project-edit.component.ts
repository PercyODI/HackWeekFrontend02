/**
 * Created by pears on 11/25/2016.
 */
import { Component, OnInit } from '@angular/core';
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
  project: Project;

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

  goBack(): void {
    this.location.back();
  }
  
  save(): void {
    this.projectService.updateProject(this.project);
  }
}
