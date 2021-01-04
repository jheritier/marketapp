import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../services/article.service';
import { Article, VariantArticle } from '../models/article';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  articles : Article[] = [];
  
  constructor(
    private articleService: ArticleService,
  ) { };

  ngOnInit(): void {
    this.articles = this.articleService.getArticleWithoutVariant();
  };

}

