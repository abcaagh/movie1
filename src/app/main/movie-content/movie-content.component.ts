import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.scss']
})
export class MovieContentComponent implements OnInit {

  public moviesList = []
  
  constructor(public movieService: MovieService,) { }

  ngOnInit(): void {
    this.moviesList.push(this.movieService.getById(1));
    this.moviesList.push(this.movieService.getById(5));
    this.moviesList.push(this.movieService.getById(7));
    console.log(this.moviesList);
    
  }

  renderHtml(){
  }
  openMovieDetail(){}
}
