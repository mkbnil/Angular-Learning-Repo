import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipien 1","Test dssc","https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg"),
    new Recipe("Test Recipie 2","Test dssc","https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg"),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
