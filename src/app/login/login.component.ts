import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutes } from '../app-routing/app-routes.enum';
import { LoginService } from '../shared/login/login.service';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['some-user', Validators.required],
      password: ['unsafe-password', Validators.required],
    });
  }

  public login(): void {
    this.loginForm.disable();
    const { username, password } = this.loginForm.value;
    this.loginService.login({ login: username, password }).subscribe(
      (user) => {
        this.userService.setUser(user);
        this.router.navigate([AppRoutes.Home]);
      },
      (error) => {
        console.log(error);
        this.loginForm.enable();
      }
    );
  }
}
