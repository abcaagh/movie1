import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/nav-bar/nav-bar.component';
import { HeaderComponent } from './main/header/header.component';
import { MovieContentComponent } from './main/movie-content/movie-content.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieContentComponent,
    MainLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
