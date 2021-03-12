import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserAuth } from '../interface';

@Component({
  selector: 'app-auth-form',
  template: `
    <h1 mat-dialog-title>Авторизация</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Имя пользователя</mat-label>
        <input matInput required [(ngModel)]="data.username">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Пароль</mat-label>
        <input matInput type="password" required [(ngModel)]="data.password">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="cancel()">Отмена</button>
      <button mat-button (click)="submit()">Вход</button>
    </div>
  `,
  styleUrls: ['./auth-form.component.less'],
})
export class AuthFormComponent {

  constructor(
    public dialogRef: MatDialogRef<AuthFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserAuth,
    private authService: AuthService,
    private snack: MatSnackBar,
  ) {
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  submit(): void {
    this.authService.auth(this.data.username, this.data.password).subscribe(
      token => {
        console.log(token.token);
        this.dialogRef.close(true);
      },
      error => {
        this.snack.open(
          'Неверное имя пользователя или пароль',
        );
      },
    );
  }
}
