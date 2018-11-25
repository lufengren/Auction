import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit, OnChanges {
  @Output()
  scoreChange: EventEmitter<number> = new EventEmitter();

  @Input()
  private score: number;
  private stars: Array<boolean> = [];
  @Input()
  private readonly = true;
  constructor() { }



  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.score) {
      this.stars = [true, true, true, true, true];
      this.score = 5;
    } else {
      this.stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= this.score) {
          this.stars.push(true);
        } else {
          this.stars.push(false);
        }
      }
    }
  }

  handleClick(index) {
    if (!this.readonly) {
      this.score = index + 1;
      this.stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= index + 1) {
          this.stars.push(true);
        } else {
          this.stars.push(false);
        }
      }
      this.scoreChange.emit(this.score);
    }

  }
}
