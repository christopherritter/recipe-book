import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Chicago Hot Dog', 'The perfect, authentic Chicago-style hot dog.', 'http://www.thepauperedchef.com/images/2009/07/chicago-hot-dog-1.jpg', [
      new Ingredient('all-beef hot dog', 1),
      new Ingredient('poppyseed hot dog bun', 1),
      new Ingredient('tablespoon yellow mustard', 1),
      new Ingredient('tablespoon sweet green pickle relish', 1),
      new Ingredient('tablespoon chopped onion', 1)
    ]),
    new Recipe('Cincinnati Cheese Coney', 'Cincinnati chili is the star of a cheese coney.', 'http://www.seriouseats.com/2008630CheeseConey.jpg', [
      new Ingredient('all-beef hot dog', 1),
      new Ingredient('hot dog bun', 1),
      new Ingredient('shredded cheddar cheese', 1),
      new Ingredient('Skyline chili', 1),
      new Ingredient('chopped onion', 1)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
