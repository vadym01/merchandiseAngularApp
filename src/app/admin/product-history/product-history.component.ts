import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/services/model/product.model';
import { error } from 'protractor';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-product-history',
  templateUrl: './product-history.component.html',
  styleUrls: ['./product-history.component.css'],
})
export class ProductHistoryComponent implements OnInit {
  productData: Product[];
  selectedProduct: Product;
  showInfo: boolean = false;
  showForm: boolean = false;
  error: ErrorReport;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.productData = data;
      },
      (error) => {
        this.error = error.error;
        console.error(error);
      }
    );
  }

  editDataInfoClickHandler(index: number) {
    this.showForm = true;
    this.showInfo = false;
    this.selectedProduct = this.productData[index];
  }

  showDataInfoClickHandler(index: number) {
    this.selectedProduct = this.productData[index];
    this.showForm = false;
    this.showInfo = true;
  }

  onDeleteClickHandler(invNumber: number, index: number) {
    this.productService.deleteProduct(invNumber).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.error = error.error;
        console.error(error);
      }
    );
    this.productData.splice(index, 1);
  }

  onClickCloseInfoHandler() {
    this.showInfo = false;
    this.showForm = false;
  }

  onFormSubmit(productFormData: NgForm) {
    let product: Product = {
      invnumber: this.selectedProduct.invnumber,
      ...productFormData?.value,
    };
    this.productService.saveProduct(product).subscribe(
      (response) => {
        product = response;
      },
      (error) => {
        this.error = error.error;
        console.log(error);
      }
    );
    this.showForm = false;
    const index = this.productData.findIndex(
      (prodIndex) => prodIndex.invnumber === product.invnumber
    );
    this.productData.splice(index, 1, product);
  }
}
