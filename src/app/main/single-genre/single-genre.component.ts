import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService, MovieGenre } from 'src/app/shared/movie.service';
import { Movie } from 'src/app/shared/interface';

@Component({
  selector: 'app-single-genre',
  templateUrl: './single-genre.component.html',
  styleUrls: ['./single-genre.component.scss']
})
export class SingleGenreComponent implements OnInit {

  moviesList: Movie[] = []

  constructor(
    private activeRoute: ActivatedRoute, 
    private movieService: MovieService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(param => {
      this.moviesList = this.movieService.sortByGenre(param.name)
    })
  }
  renderMovie() {
		for (let i = 1; i < this.movieService.moviesList.length; i++) {
			this.moviesList.push(this.movieService.getById(i))	
		}
  }
  openGenre(genre){
		this.route.navigate(['/genre', genre])
	}

  openMovieInDetail(movie){}

}
