import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from '../inscripciones.component';

const routes: Routes = [
  {
    path: '',
    component: InscripcionesComponent,
    // children: [
    //   { path: 'view', component: ViewStudentsComponent },
    //   { path: 'view/:id', component: ViewStudentsComponent },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
