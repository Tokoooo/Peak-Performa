import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { matchPassword} from '../../matchpassword.validator'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})


export class RegistrationComponent {

  registrationForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  })
  
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  registerWithEmailAndPassword(){
    this.authService.registerWithEmailAndPassword(this.registrationForm.value).then((res: any) => {
      this.router.navigateByUrl('home')
    }).catch((error: any) => {
      if (error.code === 'auth/email-already-in-use') {
        this.registrationForm.get('email')?.setErrors({ emailInUse: true })
      } else {
        console.error('Error signing up:', error);
      }
    })
  }
}
