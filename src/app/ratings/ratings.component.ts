import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ratings",
  templateUrl: "./ratings.component.html",
  styleUrls: ["./ratings.component.css"]
})
export class RatingsComponent implements OnInit {
  @Input()
  private score: number = 0;
  private stars: Array<boolean> = [];
  constructor() {}

  ngOnInit() {
    if (!this.score) {
      this.stars = [false, false, false, false, false];
    }
    for (let i = 1; i <= 5; i++) {
      if (i <= this.score) {
        this.stars.push(true);
      } else {
        this.stars.push(false);
      }
    }
  }
}
