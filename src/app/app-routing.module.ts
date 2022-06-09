import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AuthComponent } from './auth/auth.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { CursoComponent } from './curso/curso.component';
const routes: Routes = [
  {
    path: '',
    component: SidemenuComponent,
    children: [
      { path: 'students', component: ListStudentsComponent },
      { path: 'students/view/:id', component: ViewStudentsComponent },
      { path: 'course', component: CursoComponent },
      { path: 'inscripciones', component: InscripcionesComponent },
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
