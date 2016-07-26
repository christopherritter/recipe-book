import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RecipeListComponent } from './recipe-list';
import { Recipe } from './recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  styles: [],
  directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})
export class RecipesComponent {

}
