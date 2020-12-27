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
  selectedVariant: boolean[];

  quantity = 0;
  isSelected1 : boolean = false;
  isSelected2 : boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private articleService : ArticleService,
  ) { };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.article = this.articleService.getArticleById(params.get("article.id"));
    });

    console.log(this.article[0].variants[0].name);
    console.log(this.article[0].variants[0].values);

    this.articleVariant = this.article[0].variants[0].values;

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

  onSelectVariant(variantId){
    console.log(variantId);

    this.selectedVariant[variantId] = true;
  }


  onInputChange(changeValue){
    this.quantity = changeValue;
  }



}
