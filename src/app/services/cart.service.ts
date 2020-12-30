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

        // check if already exist on cart
        const selectedArticle = this.currentCart.articles.find(dataArticle =>{
            return dataArticle.id === article.id;
        });

        if(!selectedArticle){
            // if not add the item
            this.currentCart.articles.push(article);
            
        }else{
            // else update the quantity
            selectedArticle.quantity = article.quantity;
        }

        this.updateTotalAmount();
          
        
    }

    updateTotalAmount(){
        this.currentCart.totalAmount = 0;

        this.currentCart.articles.forEach(dataArticle => {
            this.currentCart.totalAmount += dataArticle.quantity * dataArticle.price;
        });
    }

    getCart(){
        return this.currentCart;
    }
        
    removeItem(articleid){
        this.currentCart.articles.splice(this.currentCart.articles.findIndex(dataArticle => {
            return dataArticle.id === articleid
        }));

        this.updateTotalAmount();
    }

    clearCart(){
        this.currentCart = {
            articles:[],
            totalAmount:0,
        }
        
    }

}