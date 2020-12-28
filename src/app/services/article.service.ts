export class ArticleService{
    
    articles = [

        {
            id: 1000,
            name: "Petite Arvine",
            description: "",
            price: "16.00",
            category:"Vins blancs",
            variants: [
                {
                    name:"Contenance",
                    values : [
                        "50cl",
                        "75cl",
                    ]
                }
            ],
            variantArticles: [
                {
                    article:101, // id de l'article variant
                },
                {
                    article:102, // id de l'article variant
                }
            ]
        },
        {
            id: 101,
            isVariant:true,
            parentArticle: "1",
            price: "14.00",
        },
        {
            id: 102,
            isVariant:true,
            parentArticle: "1",
            price: "20.00",
        },

        {
            id: 2,
            name: "Pinot Noir Grand Cru",
            description: "",
            price: "21.00",
            category:"Vins Rouges",
            variants: [
                {
                    name:"Contenance",
                    values : [
                        "75cl",
                    ]
                }
            ],
            variantArticles: [
                {
                }
            ]
        },
    ];

    getArticleWithoutVariant(){
        return this.articles.filter(variant => variant.isVariant !== true);
         
    }

    getArticleById(articleid){
        return this.articles.filter(id => id.id == articleid);
    }
}