import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MovieContentComponent } from './main/movie-content/movie-content.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SingleGenreComponent } from './main/single-genre/single-genre.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './main/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieContentComponent,
    MainLayoutComponent,
    SingleGenreComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
