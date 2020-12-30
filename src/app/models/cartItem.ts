import { Article, VariantArticle } from '../models/article';

export interface CartItem{
    article:Article,
    quantity:number,
}