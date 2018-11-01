import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() {}
  ngOnInit() {
    this.products = [
      new Product(
        1,
        "Canno Camera",
        200,
        "Model 4200",
        ["Electronic", "Photography"],
        5
      ),
      new Product(
        2,
        "Canno Camera",
        100,
        "Model 200",
        ["Electronic", "Photography"],
        4
      ),
      new Product(
        3,
        "Canno Camera",
        200,
        "Model 4200",
        ["Electronic", "Photography"],
        3
      ),
      new Product(
        4,
        "Canno Camera",
        200,
        "Model 4200",
        ["Electronic", "Photography"],
        5
      ),
      new Product(
        5,
        "Canno Camera",
        200,
        "Model 4200",
        ["Electronic", "Photography"],
        5
      ),
      new Product(
        5,
        "Canno Camera",
        200,
        "Model 4200",
        ["Electronic", "Photography"],
        4
      )
    ];
  }
}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public desc: string,
    public category: Array<string>,
    public rating: number
  ) {}
}
