import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { Movie } from 'src/app/shared/interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-movie-content',
	templateUrl: './movie-content.component.html',
	styleUrls: ['./movie-content.component.scss'],
})
export class MovieContentComponent implements OnInit {
	public moviesList: Movie[] = [];

	constructor(public movieService: MovieService, private route: Router) {}

	ngOnInit(): void {
		this.renderMovie()
	}

	openGenre(genre){
		this.route.navigate(['/genre', genre])
	}

	renderMovie() {
		for (let i = 1; i < this.movieService.moviesList.length; i++) {
			this.moviesList.push(this.movieService.getById(i))	
		}
	}

	openMovieInDetail(movie: Movie) {
		this.route.navigate(['/genre','about', movie.name], {
			queryParams: {
				id: movie.id,
			},
		});
	}
}
