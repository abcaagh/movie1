import { Component, OnInit } from '@angular/core';
import { MovieGenre } from 'src/app/shared/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit {

  public movieGenres = Object.keys(MovieGenre)
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  sortByGenre(movieGenre: MovieGenre){
    this.route.navigate(['/genre', movieGenre])
  }

  

}
