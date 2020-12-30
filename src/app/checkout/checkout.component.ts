import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { CartService } from '../services/cart.service';
import { ArticleService } from '../services/article.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  hideCart : boolean = true;
  hideDelivery : boolean = false;
  hideClient : boolean = false;

  deliveryByTransporter : boolean = false;
  deliveryByTransporterAmount = 9;

  minDate = new Date();

  cartSubTotal = 120;
  cartAmount = this.cartSubTotal;

  cartArticleList;
  articleList;

  constructor(private dateAdapter: DateAdapter<Date>, private cartService: CartService, private articleService: ArticleService ) {
    this.dateAdapter.setLocale('FR-CH'); 
  }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartArticleList = this.cartService.getCart();
    console.log(this.cartService.getCart());

  }

  clearCart(){
    this.cartService.clearCart();
  }

  removeItem(){}





  showCart(){
    this.hideCart = true;
    this.hideDelivery = false;
    this.hideClient = false;
  }

  showDelivery(){
    this.hideCart = false;
    this.hideDelivery = true;
    this.hideClient = false;
  }

  showClient(){
    this.hideCart = false;
    this.hideDelivery = false;
    this.hideClient = true;
  }

  onItemChange(value){
    console.log(" Value is : ", value );

    if(value == "deliveryByTransporter"){
      this.deliveryByTransporter = true;
      this.cartAmount += this.deliveryByTransporterAmount;
    }
    else{
      this.deliveryByTransporter = false;
      this.cartAmount -= this.deliveryByTransporterAmount;
    }
 }

}
