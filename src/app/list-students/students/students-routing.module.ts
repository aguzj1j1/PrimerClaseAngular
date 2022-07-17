import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from '../list-students.component';
import { AlumnosComponent } from 'src/app/alumnos/alumnos.component';
debugger;
const routes: Routes = [
  {
    path: '',
    component: ListStudentsComponent,

  },
  { path: 'view', component: AlumnosComponent },
  { path: 'view/:id', component: AlumnosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
