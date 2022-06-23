import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  apiKey = '110dee266f1acc372caff3f7f098ea7c';
  baseUrl = 'https://api.themoviedb.org/3/movie/550?api_key=110dee266f1acc372caff3f7f098ea7c';
  temp: any;

  constructor(private http: HttpClient) { }

  getSample(): Promise<any>{
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.baseUrl).subscribe(data => {
        console.log(data);
        resolve(data);
      });
    })
    return promise;
  }
}