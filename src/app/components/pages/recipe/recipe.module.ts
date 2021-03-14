import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { RecipeComponent } from './recipe.component';

@NgModule({
  declarations: [
    RecipeComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
  ],
})
export class RecipeModule {}
