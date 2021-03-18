import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductStorage } from 'src/app/services/model/product-storage.model';

@Component({
  selector: 'app-warehouse-report',
  templateUrl: './warehouse-report.component.html',
  styleUrls: ['./warehouse-report.component.css'],
})
export class WarehouseReportComponent implements OnInit {
  totalAmount: ProductStorage;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getTotalAmount().subscribe(
      (data) => {
        this.totalAmount = data;
        console.log(data);
      },
      (error) => {
        // console.log(error);
      }
    );
  }
}
