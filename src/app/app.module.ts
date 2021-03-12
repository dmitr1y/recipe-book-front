import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AuthModule } from './components/auth/auth.module';
import { MainNavigationComponent } from './components/navigation/main-navigation/main-navigation.component';
import { DashboardModule } from './components/pages/dashboard/dashboard.module';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    NotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(
      AppRoutes,
      {
        enableTracing: false,
        preloadingStrategy: SelectivePreloadingStrategyService,
      },
    ),
    AuthModule,
    DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
