import { Component } from "@angular/core";
import { count } from "console";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .visible {
        visibility: hidden;
      }
    `,
  ],
})
export class AppComponent {
  visibility = false;
  counter = 0;
  fourClicks = [];
  fiveOrMoreClicks = []
  overFive: boolean;

  

  isvisible() {
    this.visibility = !this.visibility;
    

    if (this.counter < 4) {
      this.overFive = true
      this.fourClicks.push(++this.counter);
    } else {
      this.overFive = false
      this.fiveOrMoreClicks.push(++this.counter);
      
    }

    console.log("fourClicks", this.fourClicks);

    console.log("fiveOrMoreClicks", this.fiveOrMoreClicks);
    
    console.log(this.counter);
    console.log("OVER FIVE",this.overFive);

  }
}
