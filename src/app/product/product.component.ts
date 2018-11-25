import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product.service';
import { ProductService } from '../service/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Observable<Product[]>;
  // public searchForm: FormControl = new FormControl();
  // public keyWord: string;
  constructor(private productService: ProductService) {
    // this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {
    //   this.keyWord = value;
    // });
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe((searchWords) => {
      this.products = this.productService.searchProduct(searchWords);
    });
  }
}
