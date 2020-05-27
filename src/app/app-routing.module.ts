import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MovieContentComponent } from './main/movie-content/movie-content.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { AboutMovieComponent } from './main/about-movie/about-movie.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', redirectTo: '/', pathMatch: 'full' },
			{ path: '', component: MovieContentComponent },
			{ path: 'watch/:name', component: AboutMovieComponent },
			{
				path: 'genre/:name',
				loadChildren: () =>
					import('./main/nav-bar/nav-bar.module').then((m) => m.NavbarModule),
			},
		],
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
