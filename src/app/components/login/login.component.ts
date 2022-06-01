import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services1/auth.service';
import Swal from 'sweetalert2';
import { FunctionPromiseService } from '../services/function-promise.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public get LoginFormControl(): any {
    return this.LoginForm.controls;
  }
  constructor(
    private route: Router,
    private auth: AuthService,
    private funcPromise: FunctionPromiseService
  ) {}

  ngOnInit(): void {}

  async onLogin() {
    try {
      const members: any = await this.funcPromise.getMember();
      const userLogin: any = await this.checkAccess(
        members,
        this.LoginForm.value
      );
      if (userLogin.position == 'admin') {
        localStorage.setItem('token', 'tfuygaslduigasliudgaios');
        localStorage.setItem('access', 'admin');
        Swal.fire({
          title:'Login success',
          icon:'success',
          timer:1000
        })
        // Swal.fire('Login success', '', 'success');
        setTimeout(() => {
          this.route.navigate(['admin']);
        }, 2000);
      } else if (userLogin.position == 'reception') {
        localStorage.setItem('token', 'tfuygaslduigasliudgaios');
        localStorage.setItem('access', 'reception');
        // Swal.fire('Login success', '', 'success');
        Swal.fire({
          title:'Login success',
          icon:'success',
          timer:1000
        })
        setTimeout(() => {
          this.route.navigate(['reception']);
        }, 2000);
      } else if (userLogin.position == 'doctor') {
        localStorage.setItem('token', 'tfuygaslduigasliudgaios');
        localStorage.setItem('access', 'doctor');
        Swal.fire({
          title:'Login success',
          icon:'success',
          timer:1000
        })
        // Swal.fire('Login success', '', 'success');
        setTimeout(() => {
          this.route.navigate(['doctor']);
        }, 2000);
      } else {
        Swal.fire('Login fail', '', 'error');
      }
    } catch (error) {
      console.log(error);
      Swal.fire('Login fail', '', 'error');
    }

    // this.auth.onLogin(this.LoginForm.value).subscribe(
    //   (result) => {
    //     const access = localStorage.getItem('access');
    //     switch (access) {
    //       case 'admin':
    //         this.route.navigate(['admin']);
    //         break;
    //       case 'reception':
    //         this.route.navigate(['reception']);
    //         break;
    //     }
    //   },
    //   (err: Error) => {
    //     alert(err.message);
    //   }
    // );
  }

  private checkAccess(members: any, loginForm: any) {
    return new Promise((resolve) => {
      console.clear();
      console.log(members);
      console.log(loginForm);

      const resultFind: any = members.find(
        (m: any) =>
          m.username === loginForm.username && m.password === loginForm.password
      );
      console.log(resultFind);
      resolve(resultFind);
    });
  }
}
