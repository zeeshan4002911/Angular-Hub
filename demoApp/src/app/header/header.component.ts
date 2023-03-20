import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  slogan: string = 'Your one stop shop for everything';
  source : string = '/assets/shopping.avif'; // for propwert binding
  ngOnInit(): void {}
  
  getSlogan(): string {
    return this.slogan;
  }
}
