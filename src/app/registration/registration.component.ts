import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { matchPassword} from '../../matchpassword.validator'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  // reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // rePass = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm'

  constructor(private http: HttpClient, private router: Router) {
    this.registrationForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      // email: new FormControl(null, [Validators.required, Validators.email]),  
      Password: new FormControl(null, ([Validators.required, Validators.minLength(8), Validators.maxLength(32)])),
      ConfirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
    },
    {
      validators: matchPassword
    }
    );
  }

  // emailValidator(control: { value: string; }) {
  //   if (control.value) {
  //     const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
  //     return matches ? null : { 'invalidEmail': true };
  //   } else {
  //     return null;
  //   }
  // }

  onSubmit() {
    this.http
      .post(
        'https://first-project-5c422-default-rtdb.firebaseio.com/users.json',
        this.registrationForm.value
      )
      .subscribe((response) => console.log(response));
      this.router.navigate(['/home'])
  }

}
