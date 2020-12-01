import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hideContent : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(){
    this.hideContent = !this.hideContent;
  }

}
