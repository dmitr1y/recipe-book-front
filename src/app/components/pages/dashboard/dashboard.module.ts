import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CocktailCardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule,
    FlexModule,
  ],
})
export class DashboardModule {}
