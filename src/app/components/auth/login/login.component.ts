import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  template: `
    <div class="user-menu">
      <ng-container *ngIf="!auth.isAuthorized()">
        <button mat-mini-fab color="basic" aria-label="Вход" (click)="openAuthForm()">
          <mat-icon>login</mat-icon>
        </button>
      </ng-container>

      <ng-container *ngIf="auth.isAuthorized()">
        <button mat-mini-fab color="basic" aria-label="Меню пользователя" [matMenuTriggerFor]="userMenu">
          <mat-icon>face</mat-icon>
        </button>

        <mat-menu #userMenu="matMenu">
          <button mat-menu-item (click)="logout()">
            <mat-icon>logout</mat-icon>
            <span>Выход</span>
          </button>
        </mat-menu>
      </ng-container>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
  }

  openAuthForm(): void {
    const dialogRef = this.dialog.open(AuthFormComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.beforeClosed().subscribe(result => {

    });
  }

  logout(): void {
    this.auth.logout();
  }
}
