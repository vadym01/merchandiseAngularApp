import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product.model';
import { ProductStorage } from './model/product-storage.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  saveProduct(data: Product) {
    return this.http.post<Product>(this.baseUrl + 'product', data);
  }

  updateProduct(data: Product) {
    return this.http.put<Product>(this.baseUrl + 'product', data);
  }

  getTotalAmount() {
    return this.http.get<ProductStorage>(this.baseUrl + 'product/total');
  }

  getAllProducts() {
    return this.http.get<Product[]>(this.baseUrl + 'product/all');
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseUrl + `product/${id}`);
  }
}
