import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
