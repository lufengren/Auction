import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formModel: FormGroup;
  categories: string[];
  constructor(private productService: ProductService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.priceValidator],
      category: ['-1']
    });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategory();
  }
  priceValidator(control: FormControl) {
    if (!control.value) {
      return null;
    }
    let price = parseInt(control.value);
    if (price > 0) {
      return null;
    } else {
      return { priceValidator: true };
    }
  }

  onSearch() {
    if (this.formModel.valid) {
      //console.log(this.formModel.value);
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }
}
