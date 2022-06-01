import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  onLogin({ username, password }: any): Observable<any> {
    console.log(username, password);

    if (username === 'admin' && password === 'admin') {
      this.setToken('aoisdijzdwad656563s');
      localStorage.setItem('access', 'admin');
      return of({ name: 'ADMIN' });
    }
    if (username === 're' && password === 're') {
      this.setToken('aoisdijzdwads656563s');
      localStorage.setItem('access', 'reception');
      return of({ name: 'RECEPTION' });
    }

    return throwError(new Error('Failed to login'));
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
