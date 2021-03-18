import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/services/model/product.model';
import { error } from 'protractor';
import { NgForm } from '@angular/forms';

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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.productData = data;
      },
      (error) => {
        console.log(error);
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
