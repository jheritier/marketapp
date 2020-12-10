import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  minDate = new Date();

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('FR-CH'); 
  }

  ngOnInit(): void {
  }

}
