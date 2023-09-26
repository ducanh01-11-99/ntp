import {AbstractControl, ValidatorFn} from "@angular/forms";

export const validatePassword: ValidatorFn = (control: AbstractControl) => {
  if (control.value.length < 8) {
    return { passwordTooShort: true };
  }

  return null;
};
