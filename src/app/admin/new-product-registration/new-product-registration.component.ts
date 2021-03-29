import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/services/model/product.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-new-product-registration',
  templateUrl: './new-product-registration.component.html',
  styleUrls: ['./new-product-registration.component.css'],
})
export class NewProductRegistrationComponent implements OnInit {
  formSubmissionResult: Product;
  error: ErrorReport;
  invNumber: number;

  @ViewChild('f') registrationForm: NgForm | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onSubmit(registrationForm: NgForm | undefined) {
    this.productService.saveProduct(registrationForm?.value).subscribe(
      (response) => {
        this.invNumber = response.invnumber;
        console.log(response);
      },
      (error) => {
        this.error = error.error;
      }
    );
  }
}
