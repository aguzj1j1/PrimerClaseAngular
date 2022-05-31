import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentsComponent}  from './list-students/list-students.component'
import { AuthComponent } from './auth/auth.component';
import { ViewStudentsComponent } from './view-students/view-students.component';


const routes: Routes = [
  { path:'auth', component:AuthComponent},
  {path: 'students', component: ListStudentsComponent},
  {path: 'students/view/{id}', component: ViewStudentsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
