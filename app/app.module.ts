import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

//Routing
import { AppRoutingModule } from './app-routing.module';

// lodash
import * as _ from 'lodash';

// ng2-bootstrap
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

//Project Components
import { 
  FindProjectsComponent, 
  ProjectDetailComponent,
  ProjectEditComponent
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
    ProjectDetailComponent,
    ProjectEditComponent
  ],
  providers: [ ProjectService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
