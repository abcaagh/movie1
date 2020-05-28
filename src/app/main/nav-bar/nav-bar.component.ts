import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieGenre, MovieService } from 'src/app/shared/movie.service';
import { Movie } from 'src/app/shared/interface';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
})
export class NavbarComponent implements OnInit {
	abbr = '';
	public movieGenres = Object.keys(MovieGenre);

	constructor(private route: Router, private moviesService: MovieService) {}

	ngOnInit(): void {}
	
}
