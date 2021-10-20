import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
public recipes: Recipe[] =[
  new Recipe("Test recipe A", "only fro Testing the recipe", 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
  new Recipe("Test recipe B", "only fro Testing the recipe B", 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
]
  constructor() { }

  ngOnInit(): void {
  }

}
