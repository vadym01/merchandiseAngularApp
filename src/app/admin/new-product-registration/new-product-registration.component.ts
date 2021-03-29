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

@Component({
  selector: 'app-new-product-registration',
  templateUrl: './new-product-registration.component.html',
  styleUrls: ['./new-product-registration.component.css'],
})
export class NewProductRegistrationComponent implements OnInit {
  formSubmissionResult: Product;
  error: string;
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
        console.error(error);

        setTimeout((this.error = null), 4000);
        this.error = error;
      }
    );
  }
}
