import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AuthComponent } from './auth/auth.component';
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
      {path: 'students',loadChildren: () => import('./list-students/students/students.module').then((x) => x.StudentsModule)},
      {path: 'course', loadChildren: () => import('./curso/curso/curso.module').then((x) => x.CursoModule)},
      {path: 'inscripciones', loadChildren: () => import('./inscripciones/inscripciones/inscripciones.module').then((x) => x.InscripcionesModule)},
      {path: 'users',loadChildren: () =>import('./list-users/list-users/list-users.module').then((x) => x.ListUsersModule)}
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
