import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  
  article;

  articleVariant: any[];
  selectedVariant: boolean[] = [];

  articlePrice;
  articleVariantDef;
  variantIdSelected;

  quantity = 0;
  isSelected1 : boolean = false;
  isSelected2 : boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private articleService : ArticleService,
  ) { };

  ngOnInit() {

    // Données de l'article
    this.route.paramMap.subscribe(params => {
      this.article = this.articleService.getArticleById(params.get("article.id"));
    });

    // Listes des déclinaisons
    this.articleVariant = this.article[0].variants[0].values;
    this.resetVariantSelection();
    
    //set default variant
    this.onSelectVariant(0);
    this.getArticlePrice();
  }

  getArticlePrice(){

    // if variant exists
    if(this.articleVariant.length > 1){
      this.articleVariantDef = this.articleService.getArticleById(this.article[0].variantArticles[this.variantIdSelected].article)
      
      this.articlePrice = this.articleVariantDef[0].price;

    }else{
      this.articlePrice = this.article[0].price;
    }
    
  }

  // selected variant on articleDetails
  onSelectVariant(variantId){
    this.variantIdSelected = variantId;
    this.resetVariantSelection();

    // set variant button
    this.selectedVariant[variantId] = true;
    
    // set price
    this.getArticlePrice();
    
  }

  // reset variant array
  resetVariantSelection(){
    for(let i = 0; i < 2; i++){
      this.selectedVariant[i] = false;
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
