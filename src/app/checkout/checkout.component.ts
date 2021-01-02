import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { CartService } from '../services/cart.service';
import { ArticleService } from '../services/article.service';
import { Article, VariantArticle } from '../models/article';



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

  cartSubTotal;
  cartAmount = 0;

  article : Article;
  cartArticles : Article[] = [];
  currentCart;
  itemInCart = 0 ;
  parentname;

  constructor(private dateAdapter: DateAdapter<Date>, private cartService: CartService, private articleService: ArticleService ) {
    this.dateAdapter.setLocale('FR-CH'); 
  }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.currentCart = this.cartService.getCart();

    this.cartArticles = this.currentCart.articles;


    
    this.cartSubTotal = this.currentCart.totalAmount;

    this.cartAmount = this.cartSubTotal;


    // Item in cart
    this.itemInCart = this.currentCart.articles.length;

    console.log(this.cartArticles)

  }

  clearCart(){
    this.cartService.clearCart();
    this.getCart();
  }

  removeItem(articleid){
    this.cartService.removeItem(articleid);
    this.getCart();
  }

  getParentName(articleparentid, articleid){

    if(articleparentid == ""){
      this.parentname = this.articleService.getArticleById(articleid);
    }else{
      this.parentname = this.articleService.getArticleParent(articleparentid);
    }

  
    return this.parentname.name;
  }


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
