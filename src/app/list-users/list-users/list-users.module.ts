import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUsersRoutingModule } from './list-users-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListUsersRoutingModule
  ],
  exports:[
    ListUsersRoutingModule
  ]
})
export class ListUsersModule { }
