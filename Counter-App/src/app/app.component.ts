import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter-App';
  currentCount: number = 0;
  counter(opr: string) {
    if (opr === '+') this.currentCount++;
    if (opr === "-" && this.currentCount > 0) this.currentCount--;
  }
}
