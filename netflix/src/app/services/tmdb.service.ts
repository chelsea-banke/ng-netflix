import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  apiKey = '110dee266f1acc372caff3f7f098ea7c';
  baseUrl = 'https://api.themoviedb.org/3' //all/?api_key=110dee266f1acc372caff3f7f098ea7c';
  trendingUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key='
  temp: any;

  constructor(private http: HttpClient) { }

  getMovies(sortBy: string, genre=0): Promise<any>{
    let url: string;
    if (genre == 0){
      url = `${this.baseUrl}/movie//${sortBy}?api_key=${this.apiKey}`;
    }
    else { 
      url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genre}`;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).subscribe(data => {
        // console.log(data);
        resolve(data);
      });
    })
    return promise;
  }

  getTrending(): Promise<any>{
    const url = this.trendingUrl + this.apiKey;
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).subscribe(data => {
        // console.log(data);
        resolve(data);
      })
    })
    return promise;
  }
}