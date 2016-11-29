import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

//Routing
import { AppRoutingModule } from './app-routing.module';

// ng2-bootstrap
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

//Project Components
import { 
  FindProjectsComponent, 
  ProjectDetailComponent 
} from './project/index';

//Shared Models and Services
import {
  ProjectService
} from './shared/index';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2BootstrapModule
  ],
  declarations: [ 
    AppComponent,
    FindProjectsComponent,
    ProjectDetailComponent
  ],
  providers: [ ProjectService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
