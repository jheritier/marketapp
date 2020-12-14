import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  hideCart : boolean = true;
  hideDelivery : boolean = false;
  hideClient : boolean = false;

  minDate = new Date();

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('FR-CH'); 
  }

  ngOnInit(): void {
  }

  showCart(){
    this.hideCart = true;
    this.hideDelivery = false;
    this.hideClient = false;
  }

  showDelivery(){
    this.hideCart = false;
    this.hideDelivery = true;
    this.hideClient = false;
  }

  showClient(){
    this.hideCart = false;
    this.hideDelivery = false;
    this.hideClient = true;
  }

}
