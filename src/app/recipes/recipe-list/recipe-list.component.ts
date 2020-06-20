import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test', 'https://i.ytimg.com/vi/OJ3dE5eyCUU/maxresdefault.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
