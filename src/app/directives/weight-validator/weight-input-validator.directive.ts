import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appWeightInputValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: WeightInputValidatorDirective,
      multi: true,
    },
  ],
})
export class WeightInputValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    if (control.value < 0.01 || control.value > 1000.0) {
      return { numberInvalid: true };
    }
    return null;
  }
}
