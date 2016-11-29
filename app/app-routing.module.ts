import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

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
    imports: [
        RouterModule.forRoot(routes),
        Ng2BootstrapModule
        ],
    exports: [RouterModule]
})
export class AppRoutingModule {}