import { Component, OnInit, ViewChild } from '@angular/core';


import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UserService } from '../services/users.service';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  auth: any;
  admin: boolean;
  userActual :string;
  constructor(private _auth : UserService,private _route :Router) { }

  ngOnInit(): void {
    this.auth = localStorage.getItem('user');
    let objeto = JSON.parse(this.auth);
    this.admin = objeto[0]['admin'];
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  listeningUser(){
    return this._auth.getUserName();
  }
  listeningComponente(){
    return document.location.pathname;
  }
  logOut(){
    this._auth.setSignOut();
    this._route.navigate(['/auth']);
  }
}
