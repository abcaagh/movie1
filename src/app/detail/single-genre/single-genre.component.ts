import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService, MovieGenre } from 'src/app/shared/movie.service';
import { Movie } from 'src/app/shared/interface';

@Component({
	selector: 'app-single-genre',
	templateUrl: './single-genre.component.html',
	styleUrls: ['./single-genre.component.scss'],
})
export class SingleGenreComponent implements OnInit {

	moviesList: Movie[] = [];
	currentGenre = '';

	constructor(
		private activeRoute: ActivatedRoute,
		private movieService: MovieService,
		private route: Router
	) {}

	ngOnInit(): void {
		this.activeRoute.params.subscribe((param) => {
			this.moviesList = this.movieService.sortByGenre(param.name);
			this.currentGenre = param.name;
		});
	}
	renderMovie() {
		this.moviesList = this.movieService.moviesList
	}

	openGenre(genre) {
		this.route.navigate(['/genre', genre]);
	}

	openMovieInDetail(movie: Movie) {
		this.route.navigate(['/genre', 'about', movie.name], {
			queryParams: {
				id: movie.id,
			},
		});
	}
}
