import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/users.service';
import { UserAuth } from '../models/users.model';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['Usuario', 'Nombre', 'Apellido', 'email', 'Admin'];
  admin: boolean;
  auth: any;
  subscriptions: Subscription;
  users: any;
  @ViewChild(MatTable) tabla1: MatTable<any>;
  dataSource: MatTableDataSource<UserAuth>;
  constructor(private user: UserService,private route: Router) {
    this.auth = localStorage.getItem('user');
    let objeto = JSON.parse(this.auth);
    this.admin = objeto['admin'];
    if (this.admin) {
      this.displayedColumns.push('actions');
    }
   }

  ngOnInit(): void {
    this.subscriptions = new Subscription();
    this.subscriptions.add(
      this.user.getUsers().subscribe((val) => {
        this.users = val;
      })
    );
    this.dataSource = new MatTableDataSource<UserAuth>(this.users);
  }

  goToUserById(id:number){
    this.route.navigate(['/users/abm/', id]);
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
