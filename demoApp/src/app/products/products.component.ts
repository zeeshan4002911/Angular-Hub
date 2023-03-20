import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    { name: "car", status: "Unavailable", price: "$3221"},
    { name: "Bike", status: "Available", price: "$862"},
    { name: "Bucket", status: "Unavailable", price: "$121"},
    { name: "Duck", status: "Unavailable", price: "$261"},
    { name: "Toy", status: "Available", price: "$32"},
  ]
}


// structural directive(*): *ngFor -- changes dom structure by adding new element
// property directive: ngStyle -- changes look and feel of dom
