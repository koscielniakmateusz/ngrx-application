import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable({ providedIn: 'root' })
export class AuthService {

  readonly API_ROOT = 'http://localhost:3000';

  readonly TOKEN_NAME = Constants.TOKEN_NAME;

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.API_ROOT + '/login', credentials);   
  }

  getLoggedUser(): Observable<any> {
    return this.http.get<any>(this.API_ROOT + '/user');   
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
  }

}
