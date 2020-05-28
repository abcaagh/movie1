import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MovieContentComponent } from './main/movie-content/movie-content.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
	{path: '', component: MainLayoutComponent, children: [
			{ path: '', redirectTo: '/', pathMatch: 'full' },
			{ path: '', component: MovieContentComponent },
			{path: 'genre', loadChildren: () => import('./detail/detail.routing.module').then((m) => m.DetailRoutingModule)},
		],
	},
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
