import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-nav]', // selector as attribute
  selector: '.app-nav', // selector as class
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { }
  sitename: string = "Shopping";
  ngOnInit(): void {
  }

}
