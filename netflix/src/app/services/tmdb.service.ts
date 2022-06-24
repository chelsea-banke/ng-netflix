import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  apiKey = '110dee266f1acc372caff3f7f098ea7c';
  baseUrl = 'https://api.themoviedb.org/3//movie/' //all/?api_key=110dee266f1acc372caff3f7f098ea7c';
  trendingUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key='
  temp: any;

  constructor(private http: HttpClient) { }

  getMovies(sortBy: string): Promise<any>{
    const url = this.baseUrl + sortBy + '?api_key=' + this.apiKey;
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).subscribe(data => {
        console.log(data);
        resolve(data);
      });
    })
    return promise;
  }

  getTrending(): Promise<any>{
    const url = this.trendingUrl + this.apiKey;
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).subscribe(data => {
        console.log(data);
        resolve(data);
      })
    })
    return promise;
  }
}