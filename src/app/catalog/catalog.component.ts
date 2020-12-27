import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import products from '../_files/products.json';
import { ArticleService } from '../services/article.service';

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
