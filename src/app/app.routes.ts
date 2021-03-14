import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { RecipeComponent } from './components/pages/recipe/recipe.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent,
  },
  {
    path: 'admin',
    canActivate: [AuthGuardService],
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
