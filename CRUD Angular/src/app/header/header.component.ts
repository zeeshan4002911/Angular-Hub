import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // Inline Template html
  template: '<p class="red">header works!</p>',
  // templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // Inline Style 
  styles: [
    `.red{
      background-color:red;
    }`
  ]
})
export class HeaderComponent {

}
