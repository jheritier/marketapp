import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { CartService } from '../services/cart.service';
import { Article, VariantArticle } from '../models/article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  
 // article : Article[] = [];
  articleVariant: any[];

  article : Article;

  selectedVariantArticle;



  articleId:number = 0;

  selectedVariant: boolean[] = [];

  articlePrice;
  articleVariantDef;
  variantIdSelected;

  quantity = 0;

  
  constructor(
    private route: ActivatedRoute,
    private articleService : ArticleService,
    private cartService: CartService,
  ) { };

  ngOnInit() {

    // Données de l'article
    this.route.paramMap.subscribe(params => {
      this.article = this.articleService.getArticleById(params.get("article.id"));
    });

    this.getVariantArticle();
    this.onSelectVariant(0);
  }

  getVariantArticle(){
    this.articleVariant = this.article.variants.values;
  }

  getArticlePrice(articleId){
    if(this.articleVariant.length > 1){
      this.selectedVariantArticle = this.articleService.getArticleById(this.article.variantArticles[articleId].article);
      this.articlePrice = this.selectedVariantArticle.price;

    }else{
      this.articlePrice = this.article.price;
    }
  }

  // selected variant on articleDetails
  onSelectVariant(variantId){

    this.resetVariantSelection();

    // set variant button
    this.selectedVariant[variantId] = true;
    
    // set price
    this.getArticlePrice(variantId);

  }

  // reset variant array
  resetVariantSelection(){
    for(let i = 0; i < this.articleVariant.length; i++){
      this.selectedVariant[i] = false;
    }
  }

  addToCart(){
    
    if(this.articleVariant.length > 1){
      this.selectedVariantArticle.quantity = this.quantity;
    this.cartService.addToCart(this.selectedVariantArticle);

    }else{
      this.article.quantity = this.quantity;
      this.cartService.addToCart(this.article);
    }
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

  onInputChange(changeValue){
    this.quantity = changeValue;
  }


}
