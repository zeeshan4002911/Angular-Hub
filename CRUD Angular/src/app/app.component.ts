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
  cls = "start";
}
