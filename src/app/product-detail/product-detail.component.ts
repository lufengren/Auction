import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService, Product, Comment } from "../service/product.service";
import { isDefaultChangeDetectionStrategy } from "@angular/core/src/change_detection/constants";
import { UUID } from 'angular2-uuid';

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public comments: Comment[];
  public productId: number;
  public newComment: string;
  public newScore: number = 5;
  private isCommentHidden = true;
  // public testval: any;
  constructor(
    private routeinfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productId = this.routeinfo.snapshot.params["productId"];
    this.productService.getProduct(this.productId).subscribe((product) => {
      this.product = product;
    });
    this.productService.getComments(this.productId).subscribe((comments) => {
      this.comments = comments;
    });
  }

  showOrHide() {
    this.isCommentHidden = !this.isCommentHidden;
  }
  submitNewComment() {
    let uuid = UUID.UUID();
    let newProductComment = new Comment(uuid, this.productId, this.newComment, new Date().toDateString(), "Joe", this.newScore);
    this.comments.unshift(newProductComment);
    let sumOfScore = this.comments.reduce((sum, comment) => { return sum += comment.rating }, 0);
    this.product.rating = sumOfScore / this.comments.length;
    this.newComment = "";
    this.isCommentHidden = true;
    this.newScore = 5;
  }
}

