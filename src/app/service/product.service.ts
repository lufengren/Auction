import { Injectable } from "@angular/core";
import { Timestamp } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() { }
  public products: Product[] = [
    new Product(
      1,
      "Canno Camera1",
      200,
      "Model 4200",
      ["Electronic", "Photography"],
      5
    ),
    new Product(
      2,
      "Canno Camera2",
      100,
      "Model 200",
      ["Electronic", "Photography"],
      4
    ),
    new Product(
      3,
      "Canno Camera3",
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

  public comments: Comment[] = [
    new Comment("1", 1, "Pretty good", "2018-10-10 11:12", "Jay", 3),
    new Comment("2", 2, "Pretty good", "2018-09-10 11:12", "Kelly", 5),
    new Comment("3", 1, "Pretty good", "2018-11-10 11:12", "Jay", 4),
    new Comment("4", 3, "Pretty good", "2018-10-10 11:12", "Keri", 2)
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(product => {
      return product.id == id;
    });
  }

  getComments(productid): Comment[] {
    return this.comments.filter(comment => {
      return comment.productId == productid;
    });
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
  ) { }
}

export class Comment {
  constructor(
    public id: string,
    public productId: number,
    public content: string,
    public time: string,
    public user: string,
    public rating: number
  ) { }
}
