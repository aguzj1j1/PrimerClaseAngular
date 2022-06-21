import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from 'src/app/users/users.component';
import { ListUsersComponent } from '../list-users.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent,
    loadChildren: () =>import('src/app/users/users/users.module').then((x) => x.UsersModule)
  },
  { path: 'abm', component: UsersComponent },
  { path: 'abm/:id', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUsersRoutingModule {}
