import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { matchPassword} from '../../matchpassword.validator'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})


export class RegistrationComponent {
  firstname: string = ''
  registrationForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl(null, [Validators.required]),
  })


  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}


  registerWithEmailAndPassword(){
    const userData = Object.assign(this.registrationForm.value, {email: this.registrationForm?.value?.username})
    this.authService.registerWithEmailAndPassword(userData).then((res: any) => {
      this.router.navigateByUrl('home')
    }).catch((error: any) => {
      console.error(error)
    })
  }
}
