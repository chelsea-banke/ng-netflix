import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Trending: any;
  backdropImg: string = '';
  disInt: number = 0;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
    this.tmdbService.getTrending().then((data) => {
      this.Trending = data;
      this.disInt = Math.floor(Math.random() * (this.Trending['results'].length));
      this.backdropImg = 'https://image.tmdb.org/t/p/w1280//' + this.Trending['results'][this.disInt]['backdrop_path'];
    });
  }
}