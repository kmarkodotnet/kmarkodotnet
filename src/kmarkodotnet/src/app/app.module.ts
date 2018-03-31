import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { LogoComponent } from './logo/logo.component';
import {HomeComponent} from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    LogoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
