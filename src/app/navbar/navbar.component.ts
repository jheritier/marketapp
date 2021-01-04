import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hideContent : boolean = false;
  cartquantity : number = 0;
  currentCart;
  selectedOption;

  category = [
    { name: "Tous les produits" },
    { name: "Vins blancs" },
    { name: "Vins rouges" }
  ];

  constructor(
    public cartService : CartService,
  ) { }

  ngOnInit(): void {
    
  }

  showDetails(){
    this.hideContent = !this.hideContent;
  }

}
