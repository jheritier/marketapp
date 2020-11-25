import { Component, OnInit } from '@angular/core';
import products from '../_files/products.json';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  public productList:{name:string, price:string}[] = products;
  constructor() { };

  ngOnInit(): void {
  };

}
