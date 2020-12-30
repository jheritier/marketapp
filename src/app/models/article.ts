export interface Article{
    id: string,
    articleNo:string,
    name: string,
    price:number,
    category:string,
    variants:{
        name:string,
        values:string[],
    }
    variantArticles:VariantArticle[], 
    isVariant:boolean,
    quantity:number,
}

export interface VariantArticle{
    article:string,
}
