import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './header.component';
import { RecipeService } from './recipes';

@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ROUTER_DIRECTIVES],
  providers: [RecipeService]
})
export class AppComponent {

}
