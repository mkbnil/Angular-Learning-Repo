import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient []>();
    private ingredients: Ingredient[] =[ 
        new Ingredient("Apple",5),
        new Ingredient("Mango",10)
      ];

    getIngredients(){
      return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    AddIngredietns(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}