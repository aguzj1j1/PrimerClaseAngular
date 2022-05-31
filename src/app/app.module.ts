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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


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
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[ MatTableModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
