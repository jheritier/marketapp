import { Article, VariantArticle } from '../models/article';
import { CartItem } from '../models/CartItem';

export class CartService{
    
    currentCart : {
        articles:Article[],
        totalAmount:number,
    };

    item : CartItem;

    constructor(){
        this.currentCart = {
            articles:[],
            totalAmount:0,
        }
    }


    addToCart(article: Article){
        this.currentCart.articles.push(article);
        
    }

    getCart(){
        return this.currentCart;
    }
        
    removeItem(){

    }

    clearCart(){
        this.currentCart = {
            articles:[],
            totalAmount:0,
        }
    }

}