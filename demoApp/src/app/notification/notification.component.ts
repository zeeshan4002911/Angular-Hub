import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
  <div class="alert alert-success text-center" [hidden]="!displayNotification">
    <p>This website use cookies for better user experience</p>
    <div class="close">
      <button class="btn" (click)="closeNotification($event)">X</button>
    </div>
  </div>
  `,
  styles: [
    '.notification-bar{ margin : 10px 0; padding: 10px 20px; background-color: blue; color: white; text-align: center}',
    'p{font-size: 14px}',
    ".close{float: right; margin-top: -40px}"
  ],
})
export class NotificationComponent implements OnInit {
  constructor() {}

  displayNotification: boolean = true;
  
  closeNotification(event: Event) {
    return this.displayNotification = !this.displayNotification;
  }
  ngOnInit(): void {}
}
