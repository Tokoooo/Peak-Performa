import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})


export class LoginComponent {

  hide: boolean = true;
  passwordControl:FormControl = new FormControl('',Validators.required)


  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService, private router: Router){}

  ngOnInIt(){

  }

  loginWithGoogle(){
    this.authService.signInWithGoogle().then((res: any) => {
      this.router.navigateByUrl('home')
    }).catch((error: any) => {
      console.error(error)
    })
  }

  // get email() {
  //   return this.loginForm.get('email')
  // }

  // get password() {
  //   return this.loginForm.get('password')
  // }    


}
