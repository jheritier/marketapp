import { Component, OnInit } from '@angular/core';
import products from '../_files/products.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  
  product;
  quantity = 0;
  isSelected1 : boolean = false;
  isSelected2 : boolean = false;
  
  constructor(
    private route: ActivatedRoute,
  ) { };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  quantityP(){
    this.quantity++;
  }

  quantityM(){
    this.quantity--;
    if(this.quantity < 1){
      this.quantity = 0;
    }
  }

  bottleSize(bottleValue){
    console.log("the Value :" + bottleValue);
    if(bottleValue == 1){
      this.isSelected1 = true;
      this.isSelected2 = false;
    }
    if(bottleValue == 2){
      this.isSelected1 = false;
      this.isSelected2 = true;
    }
  }

  onInputChange(changeValue){
    this.quantity = changeValue;
  }



}
