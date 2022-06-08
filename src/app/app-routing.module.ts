import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentsComponent}  from './list-students/list-students.component'
import { AuthComponent } from './auth/auth.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const routes: Routes = [
  {
    path: '', component: SidemenuComponent,
    children: [
      { path:'auth', component:AuthComponent},
      {path: 'students', component: ListStudentsComponent},
      {path: 'students/view/:id', component: ViewStudentsComponent}   ]
  },
  // { path:'auth', component:AuthComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
