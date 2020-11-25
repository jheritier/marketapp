import { Component, OnInit } from '@angular/core';
import products from '../_files/products.json';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public productList:{name:string, price:string}[] = products;
  
  constructor() { };

  ngOnInit(): void {
  };

}
