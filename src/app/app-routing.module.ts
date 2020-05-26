import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieContentComponent } from './main/movie-content/movie-content.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: MovieContentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
