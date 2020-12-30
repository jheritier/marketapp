import { OnInit } from '@angular/core';
import { Article, VariantArticle } from '../models/article';

export class ArticleService{

    IArticle : Article[] = [
        {   
            id: "1000",
            articleNo : "1000",   
            name : "Petite Arvine",
            price : 10,
            category :"Vins blancs",
            variants :{
                    name : "Contenance",
                    values : [
                        "50cl",
                        "75cl",
                    ]
            },
            variantArticles: [
                {
                    article:"1001",
                },
                {
                    article:"1002",
                }
            ],
            isVariant: false,
            quantity:0,       
        },

        {   
            id: "1001",
            articleNo : "1001",   
            name : "Petite Arvine 50cl",
            price : 14,
            category :"Vins blancs",
            variants :{
                    name : "",
                    values : []
            },
            variantArticles: [],
            isVariant: true,
            quantity:0,       
        },

        {   
            id: "1002",
            articleNo : "1001",   
            name : "Petite Arvine 75cl",
            price : 20,
            category :"Vins blancs",
            variants :{
                    name : "",
                    values : []
            },
            variantArticles: [],
            isVariant: true,
            quantity:0,       
        },

        {   
            id: "2000",
            articleNo : "2000",   
            name : "Pinot Noir Grand Cru",
            price : 21.00,
            category :"Vins rouges",
            variants :{
                    name : "Contenance",
                    values : [
                        "75cl",
                    ]
            },
            variantArticles: [],
            isVariant: false,
            quantity:0,       
        },

        {   
            id: "1020",
            articleNo : "1020",   
            name : "Fendant",
            price : 7,
            category :"Vins blancs",
            variants :{
                    name : "Contenance",
                    values : [
                        "37.5cl",
                        "50cl",
                        "75cl",
                    ]
            },
            variantArticles: [
                {
                    article:"1021",
                },
                {
                    article:"1022",
                },
                {
                    article:"1023",
                }
            ],
            isVariant: false,
            quantity:0,       
        },

        {   
            id: "1021",
            articleNo : "1021",   
            name : "Fendant 37.5cl",
            price : 7,
            category :"Vins blancs",
            variants :{
                    name : "",
                    values : []
            },
            variantArticles: [],
            isVariant: true,
            quantity:0,       
        },

        {   
            id: "1022",
            articleNo : "1022",   
            name : "Fendant 50cl",
            price : 12,
            category :"Vins blancs",
            variants :{
                    name : "",
                    values : []
            },
            variantArticles: [],
            isVariant: true,
            quantity:0,       
        },

        {   
            id: "1023",
            articleNo : "1023",   
            name : "Fendant 75cl",
            price : 16,
            category :"Vins blancs",
            variants :{
                    name : "",
                    values : []
            },
            variantArticles: [],
            isVariant: true,
            quantity:0,       
        },



    ];
    article:Article;

    getArticle(){
        return this.IArticle;
    }

    getArticleWithoutVariant(){
        return this.IArticle.filter(variant => variant.isVariant !== true);
         
    }

    getArticleById(articleid){
        this.article = this.IArticle.find(id => id.id == articleid);

        return this.article;
    }
}