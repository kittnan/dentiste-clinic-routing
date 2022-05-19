import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
  constructor(private route: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  onLogin() {
    this.auth.onLogin(this.LoginForm.value).subscribe(
      (result) => {
        const access = localStorage.getItem('access');
        switch (access) {
          case 'admin':
            this.route.navigate(['admin']);
            break;
          case 'reception':
            this.route.navigate(['reception']);
            break;

        }
      },
      (err: Error) => {
        alert(err.message);
      }
    );
  }
}
