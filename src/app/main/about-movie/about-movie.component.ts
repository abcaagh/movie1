import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService, MovieGenre } from 'src/app/shared/movie.service';
import { Movie } from 'src/app/shared/interface';

@Component({
	selector: 'app-about-movie',
	templateUrl: './about-movie.component.html',
	styleUrls: ['./about-movie.component.scss'],
})
export class AboutMovieComponent implements OnInit {
	movie: Movie = null;
	simalarMovies: Movie[] = [];

	constructor(
		private activeRoute: ActivatedRoute,
		public movieService: MovieService
	) {}

	ngOnInit(): void {
		this.activeRoute.queryParams.subscribe((param) => {
			this.movie = this.movieService.getById(+param.id);
    });
    this.sortBySimilar()
	}

	sortBySimilar() {
    let newGenre = []
		for (let i = 0; i < this.movie.genres.length; i++) {
      let genre = this.movie.genres[i]
      newGenre = this.movieService.sortByGenre(genre)
    }
    console.log(newGenre);
    
	}
}
