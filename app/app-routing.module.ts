import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
    FindProjectsComponent,
    ProjectDetailComponent
} from './project/index';

const routes: Routes = [
    {path: '', redirectTo: '/find-projects', pathMatch: 'full'},
    {path: 'find-projects', component: FindProjectsComponent},
    {path: 'project-detail/:id', component: ProjectDetailComponent}
    ];
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}