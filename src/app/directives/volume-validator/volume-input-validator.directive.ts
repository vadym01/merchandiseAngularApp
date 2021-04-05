import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appVolumeInputValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: VolumeInputValidatorDirective,
      multi: true,
    },
  ],
})
export class VolumeInputValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    if (control.value < 0.01 || control.value > 50.0) {
      return { numberInvalid: true };
    }
    return null;
  }
}

// import { Directive } from '@angular/core';
// import {
//   NG_VALIDATORS,
//   Validator,
//   AbstractControl,
//   ValidationErrors,
// } from '@angular/forms';

// @Directive({
//   selector: '[numberLengthValidator]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: FormValidationDirective,
//       multi: true,
//     },
//   ],
// })
// export class FormValidationDirective implements Validator {
//   constructor() {}
//   validate(control: AbstractControl): ValidationErrors {
//     if (control.value < 1 || control.value > 50) {
//       return { numberInvalid: true };
//     }
//     return null;
//   }
// }
