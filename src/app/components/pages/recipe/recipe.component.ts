import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeMock } from 'src/app/components/pages/recipe/mock-data';
import { Recipe } from './interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private route: ActivatedRoute) {
    const recipeId = route.snapshot.paramMap.get('id');
    console.log(recipeId);

    this.recipe = RecipeMock;
  }

  ngOnInit(): void {
  }

}
