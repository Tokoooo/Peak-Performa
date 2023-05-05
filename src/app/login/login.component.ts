import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { createAction, props } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  hide: boolean = true;
  passwordControl: FormControl = new FormControl('', Validators.required);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,  Validators.minLength(8)])
  });

  constructor(public authService: AuthService, private router: Router, private auth: AngularFireAuth) {}

  logout = createAction('[Auth] Logout');

  ngOnInIt() {}

  loginWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res: any) => {
        this.router.navigateByUrl('home');
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  loginWithEmailAndPassword() {
    this.authService
      .signInWithEmailAndPassword(this.loginForm.value)
      .then((res: any) => {
        this.router.navigateByUrl('home');
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
