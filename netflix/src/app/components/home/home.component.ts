import { Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Trending: any;
  comedy: any;
  drama: any;

  backdropImg: string = '';
  disInt: number = 0;

  constructor(private tmdbService: TmdbService,@Inject(DOCUMENT) private document: Document,@Inject('Window') private window: any) { }

  ngOnInit() {

    this.tmdbService.getTrending().then((data) => {
      this.Trending = data;
      this.disInt = Math.floor(Math.random() * (this.Trending['results'].length));
      this.backdropImg = 'https://image.tmdb.org/t/p/w1280//' + this.Trending['results'][this.disInt]['backdrop_path'];
    });

    this.tmdbService.getMovies('all', 35).then((data) => {
      this.comedy = data;
      // console.log(this.action);
    });

    this.tmdbService.getMovies('all', 18).then((data) => {
      this.drama = data;
      console.log(this.drama);
    });

  }

  scroll(dirrection: string, id: string){
    const moveBy = this.window.screen.width/1.2;
    const elm = this.document.getElementById(id)
    if (dirrection == 'left'){
      elm?.scrollBy({
        left: -moveBy,
        behavior: 'smooth'
      })      
    }
    else if (dirrection == 'right'){
      elm?.scrollBy({
        left: moveBy,
        behavior: 'smooth'
      })  
    }
    else{ console.log(`invalid dirrection ${dirrection}`) }
  }

}