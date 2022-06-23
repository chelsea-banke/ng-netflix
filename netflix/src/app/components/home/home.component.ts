import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie: any;
  backdropImg = '';

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.tmdbService.getSample().then((data) => {
      this.movie = data;
      this.backdropImg = "url('https://image.tmdb.org/t/p/w500//" + this.movie['backdrop_path'] + "')";
      console.log(this.backdropImg);
    });
  }

}
