import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Product } from 'src/app/services/model/product.model';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-new-product-registration-form',
  templateUrl: './new-product-registration-form.component.html',
  styleUrls: ['./new-product-registration-form.component.css'],
})
export class NewProductRegistrationFormComponent implements OnInit {
  @Input() product: Product;
  @Input() invNumber: number;
  @Input() error: ErrorReport;
  @Output() formSubmissionEvent = new EventEmitter<NgForm>();
  @ViewChild('f') productForm: NgModel | undefined;
  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }

  onSubmit(data: NgForm) {
    this.formSubmissionEvent.emit(data);
    data.reset();
  }
}
