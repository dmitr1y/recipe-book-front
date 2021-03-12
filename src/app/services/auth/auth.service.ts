import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtToken } from './interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public static JWT_TOKEN_KEY = 'jwt_token';

  private jwtHelper: JwtHelperService;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.jwtHelper = new JwtHelperService();
  }

  private static getToken(): string | undefined {
    return localStorage.getItem(AuthService.JWT_TOKEN_KEY) ?? undefined;
  }

  private static saveToken(jwt: string): void {
    localStorage.setItem(AuthService.JWT_TOKEN_KEY, jwt);
  }

  private static clearStorage(): void {
    localStorage.clear();
  }

  public auth(username: string, password: string): Observable<JwtToken> {
    return this.http.post<JwtToken>(
      '/api/auth/get_token',
      {
        username,
        password,
      },
    )
      .pipe(
        tap(jwt => AuthService.saveToken(jwt.token)),
      );
  }

  public isAuthorized(): boolean {
    return !this.isTokenExpired();
  }

  public logout(): Promise<boolean> {
    AuthService.clearStorage();

    return this.router.navigate(['/']);
  }

  private isTokenExpired(): boolean {
    const token = AuthService.getToken();

    return this.jwtHelper.isTokenExpired(token);
  }
}
