import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  version = 15;
  myFunc() {
    return "Angular Journey Starts from here"
  }
  myclass = "start";
  myClick(input: String = "Hello") {
    alert(`${input},  Click Clicked`)
  }
  myFuncInput(input: String) {
    // if (!input) return;
    console.log(input)
  }
  renderVal = "";
  renderFunc(val: string) {
    this.renderVal = val;
  }
  show = true;
  toggle() {
    this.show = !this.show;
  }
}
