import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FindProjectsComponent, ProjectDetailComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'find-projects', component: FindProjectsComponent },
      { path: 'project-detail/:id', component: ProjectDetailComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
