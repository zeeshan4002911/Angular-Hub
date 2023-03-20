import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
  searchValue: string = 'iphone'; // two way data binding applied in this

  // searchData(event: Event) {
  //   this.searchValue = (<HTMLInputElement> event.target).value
  // } // event binding method
  ngOnInit(): void {
  }

}
