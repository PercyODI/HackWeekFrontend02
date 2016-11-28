import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>hackWeek Project App <small>(Edit Nav in app/app.component.ts)</small></h1>\n<router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
