/**
 * This component is for displaying a list of projects from the server
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
  
  // Provides access to projectServer
  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  // Calls the API to get a list of all projects
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .then(projects => this.projects = projects);
  }

  // Debuggin function
  consoleProjects(): void {
    console.dir(this.projects);
  }

  // Takes the user to the project detail page
  gotoDetail(id: string): void {
    this.router.navigate(['/project-detail', id]);
  }
  
  // Modifies the flag for creating a new project
  toggleIsCreatingProject(): void {
    this.isCreatingProject = !this.isCreatingProject;
  }
  
  // Catch emitted save action from edit child
  // then route user to the detail page
  clickedSave(project: Project) {
    if(project) {
      this.gotoDetail(project._id);
    }
  }
}
