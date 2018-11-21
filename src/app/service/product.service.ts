import { Injectable } from "@angular/core";
import { Timestamp, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("/api/products");
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>("/api/products/" + id);
  }

  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>("/api/products/" + id + "/comments");
  }
  getAllCategory(): string[] {
    return ["Electronic", "Photography"];
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
