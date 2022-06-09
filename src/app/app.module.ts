import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';
import { NestedComponent1ComponentComponent } from './nested-component1-component/nested-component1-component.component';
import { NestedComponent2ComponentComponent } from './nested-component2-component/nested-component2-component.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { ListStudentsComponent } from './list-students/list-students.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';
import { CursoComponent } from './curso/curso.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    ContentComponent,
    NestedComponent1ComponentComponent,
    NestedComponent2ComponentComponent,
    EmployeelistComponent,
    AuthComponent,
    ListStudentsComponent,
    CursoComponent,
    InscripcionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  exports:[SidemenuComponent,MaterialModule,LayoutModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
