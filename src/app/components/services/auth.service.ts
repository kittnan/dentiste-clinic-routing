import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { ApiService } from 'src/app/API/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private api: ApiService) {}

  // onLogin({ username, password }: any): Observable<any> {
  //   console.log(username, password);
  //   if (username === 'admin' && password === 'admin') {
  //     this.setToken('aoisdijzdwad656563s');
  //     localStorage.setItem('access', 'admin');
  //     return of({ name: 'ADMIN' });
  //   }
  //   if (username === 're' && password === 're') {
  //     this.setToken('aoisdijzdwads656563s');
  //     localStorage.setItem('access', 'reception');
  //     return of({ name: 'RECEPTION' });
  //   }

  //   return throwError(new Error('Failed to login'));
  // }

  // onLogin({ username, password }: any) {
  //   return new Promise(async (resolve) => { 

  //     const members :any = await this.getMember()

  //     // this.api.getMember().subscribe((res: any) => {
  //       // console.log(res);
  //       // const members: any = res;
  //       const resultFind: any = members.find(
  //         (m: any) => m.username === username && password === password
  //       );
  //       console.log(resultFind);
  
  //       if (resultFind.position === 'admin') {
  //         this.setToken('aoisdijzdwad656563s');
  //         localStorage.setItem('access', 'admin');
  //         return of({ name: 'ADMIN' });
  //       }
  //       if (resultFind.position === 'reception') {
  //         this.setToken('aoisdijzdwads656563s');
  //         localStorage.setItem('access', 'reception');
  //         return of({ name: 'RECEPTION' });
  //       }
  //     // });
  //     resolve('')
  //   });
  // }

  // setToken(token: string) {
  //   localStorage.setItem('token', token);
  // }

  // private getMember() {
  //   return new Promise((resolve) => {
  //     this.api.getMember().subscribe((res) => {
  //       console.log(res);
  //       resolve(res);
  //     });
  //   });
  // }
}
