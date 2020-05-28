import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMovieComponent } from './about-movie/about-movie.component';
import { SingleGenreComponent } from './single-genre/single-genre.component';

const routes: Routes = [
	{ path: ':name', component: SingleGenreComponent },
	{ path: 'about/:name', component: AboutMovieComponent },
];
@NgModule({
	declarations: [SingleGenreComponent, AboutMovieComponent],
	imports: [RouterModule.forChild(routes), CommonModule],
	exports: [RouterModule],
})
export class DetailRoutingModule {}
