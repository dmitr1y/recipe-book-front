import { Component, Input } from '@angular/core';

interface CocktailCard {
  id: number;
  title: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss'],
})
export class CocktailCardComponent {
  @Input() card!: CocktailCard;
}
