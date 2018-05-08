import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = null;
  roleId=null;

  constructor() { 
    this.isLoggedIn=localStorage.getItem("isLoggedIn");
    this.roleId=localStorage.getItem("roleId");
  }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.isLoggedIn=false;
  }

  
}
