import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from '../curso.component';
import { CursoAbmComponent } from '../../curso-abm/curso-abm.component';

const routes: Routes = [
  {
    path: '',
    component: CursoComponent,
  },
  { path: 'view', component: CursoAbmComponent },
  { path: 'view/:id', component: CursoAbmComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
