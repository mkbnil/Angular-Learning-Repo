import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Test Recipien 1","Test dssc","https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg"
        , [new Ingredient('ing1',1),new Ingredient('ing2',2)] ),
        new Recipe("Test Recipie 2","Test dssc","https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg"
        , [new Ingredient('ing3',3),new Ingredient('ing4',4)])
    ];
    constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      AddIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.AddIngredietns(ingredients);
      }

      getRecipe(index: number){
        return this.recipes.slice()[index];
      }
      
}