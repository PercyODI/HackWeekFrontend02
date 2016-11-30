/**
 * Created by pears on 11/25/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project, ProjectService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'find-projects',
  templateUrl: 'find-projects.component.html',
  styleUrls: ['find-projects.component.css']
})
export class FindProjectsComponent implements OnInit {
  projects: Project[];
  isCreatingProject: boolean = false;
  // selectedProject: Project;
  

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .then(projects => this.projects = projects);
  }

  static isArray(obj: any) {
    return typeof obj === 'array';
  }

  consoleProjects(): void {
    console.dir(this.projects);
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/project-detail', id]);
  }
  
  toggleIsCreatingProject(): void {
    this.isCreatingProject = !this.isCreatingProject;
  }
  
  // Catch emitted save action from edit child
  clickedSave(project: Project) {
    if(project) {
      // this.toggleIsCreatingProject();
      // this.getProjects();
      this.router.navigate(['/project-detail', project._id])
    }
  }
}
