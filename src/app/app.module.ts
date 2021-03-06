import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { ListStudentsComponent } from './list-students/list-students.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CursoComponent } from './curso/curso.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/users.service';
import { StoreModule } from '@ngrx/store';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursoAbmComponent } from './curso-abm/curso-abm.component';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    ContentComponent,
    EmployeelistComponent,
    AuthComponent,
    ListStudentsComponent,
    CursoComponent,
    InscripcionesComponent,
    UsersComponent,
    ListUsersComponent,
    AlumnosComponent,
    CursoAbmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,HttpClientModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([])
    ],
  exports:[SidemenuComponent,MaterialModule,HttpClientModule ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
