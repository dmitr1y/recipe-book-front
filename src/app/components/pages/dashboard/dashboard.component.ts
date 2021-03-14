import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1,
  };

  cols: number = this.gridByBreakpoint.xl;


  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        {
          id: 1,
          title: 'Card 1',
          description: 'bla bla bla',
          image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'bla bla bla',
        },
        {
          id: 3,
          title: 'Card 3',
          description: 'bla bla bla',
          image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
          id: 4,
          title: 'Card 4',
          description: 'bla bla bla',
          image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
          id: 5,
          title: 'Card 5',
          description: 'bla bla bla',
        },
      ];
    }),
  );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }
}
