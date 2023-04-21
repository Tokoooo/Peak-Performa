import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassword : ValidatorFn = (control: AbstractControl):ValidationErrors | null => {
    let password = control.get('Password');
    let confirmPassword = control.get('ConfirmPassword')
    if(password?.value !== confirmPassword?.value) {
        return {
            passwordmatcherror: true
        }
    }
    return null;
}