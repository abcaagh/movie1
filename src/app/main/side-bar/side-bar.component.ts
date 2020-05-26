import { Component, OnInit } from '@angular/core';
import { MovieGenre } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public movieGenres = Object.keys(MovieGenre)
  constructor() { }

  ngOnInit(): void {
  }

}
