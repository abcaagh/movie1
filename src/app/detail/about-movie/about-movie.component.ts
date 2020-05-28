import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/movie.service';
import { Movie } from 'src/app/shared/interface';

@Component({
	selector: 'app-about-movie',
	templateUrl: './about-movie.component.html',
	styleUrls: ['./about-movie.component.scss'],
})
export class AboutMovieComponent implements OnInit {
	currentMovie: Movie;
	simalarMovies: Movie[] = [];

	constructor(
		private activeRoute: ActivatedRoute,
		public moviesService: MovieService,
		private route: Router
	) {}

	ngOnInit(): void {
		this.activeRoute.queryParams.subscribe((param) => {
			this.currentMovie = this.moviesService.getById(+param.id);
			this.sortBySimilar(this.moviesService.getById(+param.id));
		});
	}

	sortBySimilar(currentMovie: Movie) {
		for (let i = 0; i < currentMovie.genres.length; i++) {
			this.moviesService.sortByGenre(currentMovie.genres[i]).map((item) => {
				this.simalarMovies.push(item);
			});
		}
		this.simalarMovies = this.simalarMovies.reduce((acc, current) => {
			const x = acc.find((item) => item.id === current.id);
			if (!x) {
				return acc.concat([current]);
			} else {
				return acc;
			}
		}, []);

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
