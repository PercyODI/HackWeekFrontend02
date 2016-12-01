import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 class="text-center">Project Finder</h1>\n<router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
