import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { userData } from '../interfaces/userData';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/users';
  loginUrl = 'http://localhost:3000/login'
  private http = inject(HttpClient);

  constructor() { 
    
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}`, credentials)
      .pipe(
        tap(response => {
          console.log(response)
          localStorage.setItem('token', response.accessToken);
        }),
        catchError(error => {
          console.error('Error de autenticación:', error);
          throw error;
        })
      );
  }

  addUser(user:userData): Observable<userData>{
    console.log(user);
    return this.http.post<userData>(this.url, user);
  }
}
