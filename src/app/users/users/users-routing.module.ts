import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from 'src/app/users/users.component';
const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'users/abm', component: UsersComponent },
      { path: 'users/abm/:id', component: UsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
