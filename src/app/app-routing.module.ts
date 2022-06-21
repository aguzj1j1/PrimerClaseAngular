import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AuthComponent } from './auth/auth.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { CursoComponent } from './curso/curso.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
const routes: Routes = [
  {
    path: '',
    component: SidemenuComponent,
    canActivate:[AuthGuardGuard],
    children: [
      { path: 'students', component: ListStudentsComponent },
      { path: 'students/view/:id', component: ViewStudentsComponent },
      { path: 'course', component: CursoComponent },
      { path: 'inscripciones', component: InscripcionesComponent },
      {
        path: 'users',
        loadChildren: () =>
          import('./list-users/list-users/list-users.module').then(
            (x) => x.ListUsersModule
          ),
      }
    ],
  },
  { path: 'auth', component: AuthComponent },
  // { path:'auth', component:AuthComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
