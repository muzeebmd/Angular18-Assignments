import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Example: Custom Validator to check if a password is strong enough
export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;
    // A simple rule: Password must contain at least one number and one letter
    const isValid = /[a-zA-Z]*/.test(password) ;
    return isValid ? null : { weakPassword: 'Password must contain at least one letter' };
  };
}
