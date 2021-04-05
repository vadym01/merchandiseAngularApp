import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appInputMinMaxNumberValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputMinMaxNumberValidatorDirective,
      multi: true,
    },
  ],
})
export class InputMinMaxNumberValidatorDirective implements Validator {
  @Input() minVal: number;
  @Input() maxVal: number;
  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    if (control.value < this.minVal || control.value > this.maxVal) {
      return { invalidNumber: true };
    }
    return null;
  }
}
